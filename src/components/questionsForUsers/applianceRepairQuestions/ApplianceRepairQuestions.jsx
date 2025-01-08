import { useState } from "react";
import "./applianceRepairQuestions.scss";

const ApplianceRepairQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Какая бытовая техника требует ремонта?",
      options: [
        "Холодильник",
        "Стиральная машина",
        "Посудомоечная машина",
        "Микроволновая печь",
        "Духовой шкаф",
        "Пылесос",
      ],
    },
    {
      id: "question2",
      text: "Какая проблема с устройством?",
      options: [
        "Не включается",
        "Шумит или вибрирует",
        "Не выполняет свою функцию (например, не стирает)",
        "Протечка воды",
        "Ошибка на дисплее",
        "Другая проблема",
      ],
    },
    {
      id: "question3",
      text: "Какой бренд бытовой техники?",
      options: [
        "Samsung",
        "LG",
        "Bosch",
        "Indesit",
        "Electrolux",
        "Другой",
      ],
    },
    {
      id: "question4",
      text: "Где находится устройство?",
      options: [
        "Кухня",
        "Ванная",
        "Гараж",
        "Подвал",
        "Другое помещение",
      ],
    },
    {
      id: "question5",
      text: "Когда возникла проблема?",
      options: [
        "Сегодня",
        "Несколько дней назад",
        "Неделя назад",
        "Более месяца назад",
      ],
    },
    {
      id: "question6",
      text: "Какой у вас бюджет на ремонт?",
      options: [
        "Менее 5000 сом",
        "5000-10000 сом",
        "10000-20000 сом",
        "Более 20000 сом",
      ],
    },
    {
      id: "question7",
      text: "Есть ли дополнительные комментарии или пожелания?",
      options: [
        "Необходима срочная диагностика",
        "Запасные части уже куплены",
        "Предпочтение технику с опытом ремонта этой марки",
        "Нужна консультация по дальнейшему использованию устройства",
      ],
    },
  ];

  const handleOptionSelect = (option) => {
    const currentQuestion = questions[currentStep].id;
    const currentAnswers = answers[currentQuestion] || [];

    if (currentAnswers.includes(option)) {
      setAnswers({
        ...answers,
        [currentQuestion]: currentAnswers.filter((ans) => ans !== option),
      });
    } else {
      setAnswers({
        ...answers,
        [currentQuestion]: [...currentAnswers, option],
      });
    }
  };

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / questions.length) * 100);
    } else {
      setProgress(100);
      alert("Спасибо за ответы! Мы обработаем ваш запрос.");
      console.log("Ответы пользователя:", answers);
    }
  };

  return (
    <div className="applianceRepairQuestions">
      <div className="progressBar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="questionContainer">
        <h1>{questions[currentStep].text}</h1>
        <div className="optionsContainer">
          {questions[currentStep].options.map((option) => (
            <button
              key={option}
              className={`optionButton ${answers[questions[currentStep].id]?.includes(option)
                  ? "selected"
                  : ""
                }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button className="nextButton" onClick={handleNextStep}>
          {currentStep < questions.length - 1 ? "Далее" : "Завершить"}
        </button>
      </div>
    </div>
  );
};

export default ApplianceRepairQuestions;
