import "./registrationPage.scss";
import { useState } from "react";
import {
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../components/fireBase/FireBaseConfig"; // Ваш Firebase
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [receivedCode, setReceivedCode] = useState(""); // Код, отправленный на email
  const [inputCode, setInputCode] = useState(""); // Код, введенный пользователем
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isSpecialist, setIsSpecialist] = useState(false);
  const [step, setStep] = useState(1); // Этап регистрации
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Генерация и отправка кода подтверждения
  const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (!email) {
        setError("Пожалуйста, введите email.");
        return;
      }

      const verificationCode = generateVerificationCode(); // Генерация кода
      setReceivedCode(verificationCode); // Сохраняем код
      console.log("Код для теста:", verificationCode); // Для тестирования

      const actionCodeSettings = {
        url: "http://localhost:3000/userRegisterPage",
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);

      setSuccess("Код подтверждения отправлен на ваш email.");
      setStep(2); // Переход на шаг 2
    } catch (err) {
      setError("Ошибка отправки кода: " + err.message);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError("");

    if (inputCode === receivedCode) {
      setIsCodeVerified(true);
      setSuccess("Код подтвержден. Придумайте пароль.");
      setStep(3); // Переход на шаг 3
    } else {
      setError("Неверный код подтверждения. Попробуйте снова.");
    }
  };

  const handleCompleteRegistration = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (password !== confirmPassword) {
        setError("Пароли не совпадают.");
        return;
      }

      const emailForSignIn = window.localStorage.getItem("emailForSignIn");
      if (!emailForSignIn) {
        setError("Ошибка: Email не найден. Попробуйте снова.");
        return;
      }

      await createUserWithEmailAndPassword(auth, emailForSignIn, password);
      setSuccess("Регистрация успешна!");
      navigate(isSpecialist ? "/specialistRegisterPage" : "/userRegisterPage");
    } catch (err) {
      setError("Ошибка регистрации: " + err.message);
    }
  };

  const toggleUserType = () => setIsSpecialist((prev) => !prev);

  return (
    <div className="registrationPage">
      <h1>Регистрация</h1>

      {step === 1 && (
        <form onSubmit={handleSendVerificationCode} className="registrationForm">
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Отправить код подтверждения</button>
          <button>Backk</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyCode} className="verificationForm">
          <div className="formGroup">
            <label htmlFor="verificationCode">Код подтверждения:</label>
            <input
              type="text"
              id="verificationCode"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              required
            />
          </div>
          <button type="submit">Подтвердить код</button>
        </form>
      )}

      {step === 3 && isCodeVerified && (
        <form onSubmit={handleCompleteRegistration} className="passwordForm">
          <div className="formGroup">
            <label htmlFor="password">Придумайте пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="confirmPassword">Подтвердите пароль:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>
              <input
                type="checkbox"
                checked={isSpecialist}
                onChange={toggleUserType}
              />
              Я специалист
            </label>
          </div>
          <button type="submit">Завершить регистрацию</button>
        </form>
      )}

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default RegistrationPage;
