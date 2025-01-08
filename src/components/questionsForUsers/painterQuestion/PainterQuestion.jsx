import { useState } from "react";
import "./painterQuestions.scss";

const PainterQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "question1",
      text: "Какие работы по покраске необходимы?",
      options: [
        "Покраска стен",
        "Покраска потолка",
        "Покраска оконных рам",
        "Покраска дверей",
        "Покраска фасада",
        "Декоративная покраска",
      ],
    },
    {
      id: "question2",
      text: "Какой тип поверхности нужно покрасить?",
      options: [
        "Гипсокартон",
        "Штукатурка",
        "Дерево",
        "Металл",
        "Кирпич",
        "Бетон",
      ],
    },
    {
      id: "question3",
      text: "Где требуется покраска?",
      options: [
        "Внутри дома",
        "Снаружи дома",
        "Офисное помещение",
        "Коммерческое помещение",
        "Гараж",
        "Садовые конструкции",
      ],
    },
    {
      id: "question4",
      text: "Какой тип краски вы предпочитаете?",
      options: [
        "Акриловая краска",
        "Масляная краска",
        "Латексная краска",
        "Водоэмульсионная краска",
        "Эмаль",
        "Нет предпочтений",
      ],
    },
    {
      id: "question5",
      text: "Какой у вас бюджет на покраску?",
      options: [
        "Менее 5000 сом",
        "5000-10000 сом",
        "10000-20000 сом",
        "Более 20000 сом",
      ],
    },
    {
      id: "question6",
      text: "Насколько срочно требуется работа?",
      options: [
        "Срочно (в течение 24 часов)",
        "В течение 1-2 дней",
        "В течение недели",
        "Могу подождать",
      ],
    },
    {
      id: "question7",
      text: "Есть ли дополнительные комментарии или пожелания?",
      options: [
        "Необходима предварительная подготовка поверхности",
        "Работа на высоте (лестница/строительные леса)",
        "Использование экологически чистых материалов",
        "Требуется консультация по выбору краски",
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
    <div className="painterQuestions">
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

export default PainterQuestions;
