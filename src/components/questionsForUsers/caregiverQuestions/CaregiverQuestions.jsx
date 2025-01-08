import { useState } from "react";
import "./caregiverQuestions.scss";

const CaregiverQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Для кого требуется помощь?",
      options: [
        "Ребёнок (0-3 года)",
        "Ребёнок (3-12 лет)",
        "Пожилой человек",
        "Человек с ограниченными возможностями",
      ],
    },
    {
      id: "question2",
      text: "Какие услуги требуются?",
      options: [
        "Уход за ребёнком",
        "Приготовление еды",
        "Уход за больным или пожилым человеком",
        "Сопровождение на прогулках",
        "Помощь по хозяйству",
        "Кормление и контроль приёма лекарств",
      ],
    },
    {
      id: "question3",
      text: "На какое время требуется помощь?",
      options: [
        "Полный рабочий день",
        "Частичная занятость (несколько часов в день)",
        "Ночные смены",
        "Только выходные",
        "Разовая помощь",
      ],
    },
    {
      id: "question4",
      text: "Какие дополнительные требования есть?",
      options: [
        "Опыт работы с детьми",
        "Медицинское образование",
        "Знание иностранных языков",
        "Наличие рекомендаций",
        "Умение работать с лежачими больными",
      ],
    },
    {
      id: "question5",
      text: "Когда требуется помощь?",
      options: [
        "Срочно (в течение 24 часов)",
        "В течение 1-2 дней",
        "В течение недели",
        "Через несколько недель",
      ],
    },
    {
      id: "question6",
      text: "Какой у вас бюджет на услуги?",
      options: [
        "Менее 5000 сом в месяц",
        "5000-10000 сом в месяц",
        "10000-20000 сом в месяц",
        "Более 20000 сом в месяц",
      ],
    },
    {
      id: "question7",
      text: "Есть ли дополнительные комментарии или особенности?",
      options: [
        "Нужна помощь в ночное время",
        "Требуется работа с несколькими детьми",
        "Требуется медицинская помощь (например, уколы)",
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
    <div className="caregiverQuestions">
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

export default CaregiverQuestions;
