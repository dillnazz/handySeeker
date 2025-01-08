import { useEffect, useState } from "react";
import { auth } from "../../components/fireBase/FireBaseConfig"; // Ваш импорт firebase
import { signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Для перенаправления после регистрации

const CompleteRegistration = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = window.localStorage.getItem("emailForSignIn");

    if (!email) {
      setMessage("Email не найден.");
      return;
    }

    if (auth.isSignInWithEmailLink(window.location.href)) {
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          setMessage("Вы успешно зарегистрированы!");
          navigate("/home"); 
        })
        .catch((error) => {
          console.error("Ошибка входа:", error);
          setMessage("Ошибка регистрации. Попробуйте снова.");
        });
    }
  }, [navigate]);

  return <h1>{message || "Обработка данных..."}</h1>;
};

export default CompleteRegistration;
