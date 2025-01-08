import { useState } from "react";
import "./cleanerQuestions.scss";

const CleanerQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Какой вид уборки требуется?",
      options: [
        "Генеральная уборка",
        "Уборка после ремонта",
        "Ежедневная уборка",
        "Химчистка мебели или ковров",
        "Мытьё окон",
        "Дезинфекция помещений",
      ],
    },
    {
      id: "question2",
      text: "Где требуется уборка?",
      options: [
        "Квартира",
        "Частный дом",
        "Офисное помещение",
        "Склад или производственное помещение",
        "Коммерческое помещение",
        "Другое",
      ],
    },
    {
      id: "question3",
      text: "Какой размер помещения?",
      options: [
        "Менее 50 м²",
        "50-100 м²",
        "100-200 м²",
        "200-500 м²",
        "Более 500 м²",
      ],
    },
    {
      id: "question4",
      text: "Когда требуется уборка?",
      options: [
        "Срочно (в течение 24 часов)",
        "В течение 1-2 дней",
        "В течение недели",
        "Могу подождать",
      ],
    },
    {
      id: "question5",
      text: "Есть ли особые требования?",
      options: [
        "Использование экологичных моющих средств",
        "Работа в ночное время",
        "Уборка больших высот (окна, потолки)",
        "Транспортировка мусора после уборки",
      ],
    },
    {
      id: "question6",
      text: "Какой у вас бюджет на уборку?",
      options: [
        "Менее 5000 сом",
        "5000-10000 сом",
        "10000-20000 сом",
        "Более 20000 сом",
      ],
    },
    {
      id: "question7",
      text: "Есть ли дополнительные комментарии или особенности?",
      options: [
        "Необходима уборка для сдачи помещения",
        "Нужно убрать после мероприятия",
        "Нужна консультация по уборке",
        "Другое",
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
    <div className="cleanerQuestions">
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

export default CleanerQuestions;
