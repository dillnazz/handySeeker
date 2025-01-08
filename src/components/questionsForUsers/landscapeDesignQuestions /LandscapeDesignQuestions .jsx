import { useState } from "react";
import "./landscapeDesignQuestions.scss";

const LandscapeDesignQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Какой тип услуги вам требуется?",
      options: [
        "Создание ландшафтного проекта",
        "Озеленение участка",
        "Укладка газона",
        "Посадка деревьев и кустарников",
        "Установка систем полива",
        "Модернизация существующего ландшафта",
      ],
    },
    {
      id: "question2",
      text: "Какого размера участок?",
      options: [
        "Менее 100 м²",
        "100-500 м²",
        "500-1000 м²",
        "Более 1000 м²",
      ],
    },
    {
      id: "question3",
      text: "Какие элементы дизайна вы хотите включить?",
      options: [
        "Садовые дорожки",
        "Декоративные водоёмы (пруды, фонтаны)",
        "Зоны отдыха (беседки, скамейки)",
        "Освещение территории",
        "Детская площадка",
        "Клумбы и цветники",
      ],
    },
    {
      id: "question4",
      text: "Какой стиль дизайна вам ближе?",
      options: [
        "Классический (строгие формы, симметрия)",
        "Модерн (минимализм, простота)",
        "Природный (максимальная естественность)",
        "Смешанный стиль",
      ],
    },
    {
      id: "question5",
      text: "Какой у вас бюджет на реализацию проекта?",
      options: [
        "Менее 50000 сом",
        "50000-100000 сом",
        "100000-200000 сом",
        "Более 200000 сом",
      ],
    },
    {
      id: "question6",
      text: "Когда вы хотите начать работу?",
      options: [
        "Срочно (в течение 1-2 недель)",
        "В течение месяца",
        "Через несколько месяцев",
        "Пока только рассматриваю варианты",
      ],
    },
    {
      id: "question7",
      text: "Есть ли особые пожелания или требования?",
      options: [
        "Экологические материалы",
        "Долговечность и минимальное обслуживание",
        "Решение для участков со сложным рельефом",
        "Индивидуальный подход к дизайну",
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
    <div className="landscapeDesignQuestions">
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

export default LandscapeDesignQuestions;
