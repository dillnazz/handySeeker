import { useState } from "react";
import "./plumberQuestions.scss";

const PlumberQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Какие проблемы с сантехникой?",
      options: [
        "Протекающий кран",
        "Засор в раковине",
        "Поломанный душ",
        "Нет воды в трубах",
        "Слабое давление воды",
        "Шум в трубах",
      ],
    },
    {
      id: "question2",
      text: "Какие виды работы необходимы?",
      options: [
        "Установка нового оборудования",
        "Ремонт существующего оборудования",
        "Проверка труб на утечку",
        "Замена труб",
        "Очистка канализации",
        "Установка фильтров для воды",
      ],
    },
    {
      id: "question3",
      text: "Где находится проблема?",
      options: [
        "Кухня",
        "Ванная",
        "Туалет",
        "Подвал",
        "Гараж",
        "Сад или двор",
      ],
    },
    {
      id: "question4",
      text: "Насколько срочно требуется помощь?",
      options: [
        "Срочно (в течение 24 часов)",
        "В течение 1-2 дней",
        "В течение недели",
        "Могу подождать",
      ],
    },
    {
      id: "question5",
      text: "Какой у вас бюджет на эту работу?",
      options: [
        "Менее 1000 сом",
        "1000-5000 сом",
        "5000-10000 сом",
        "Более 10000 сом",
      ],
    },
    {
      id: "question6",
      text: "Как давно появилась проблема?",
      options: [
        "Сегодня",
        "Несколько дней назад",
        "Неделя назад",
        "Более месяца назад",
      ],
    },
    {
      id: "question7",
      text: "Есть ли дополнительные комментарии или особенности?",
      options: [
        "Проблема связана с горячей водой",
        "Проблема связана с холодной водой",
        "Необходима консультация перед началом работы",
        "Есть доступ к трубам для ремонта",
      ],
    },
  ];

  const handleOptionSelect = (option) => {
    const currentQuestion = questions[currentStep].id;
    const currentAnswers = answers[currentQuestion] || [];

    // Позволяем пользователю выбирать несколько ответов
    if (currentAnswers.includes(option)) {
      // Убираем выбранный ответ, если он уже выбран
      setAnswers({
        ...answers,
        [currentQuestion]: currentAnswers.filter((ans) => ans !== option),
      });
    } else {
      // Добавляем выбранный ответ
      setAnswers({
        ...answers,
        [currentQuestion]: [...currentAnswers, option],
      });
    }
  };

  const handleNextStep = () => {
    // Переход к следующему вопросу
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / questions.length) * 100);
    } else {
      setProgress(100); // Полный прогресс
      alert("Спасибо за ответы! Мы обработаем ваш запрос.");
      console.log("Ответы пользователя:", answers);
    }
  };

  return (
    <div className="plumberQuestions">
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

export default PlumberQuestions;
