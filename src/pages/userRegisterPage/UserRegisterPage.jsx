import "./userRegisterPage.scss";
import { useState } from "react";

const UserRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    experience: "",
    city: "",
    phone: "",
    serviceCost: "",
    availability: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const {
      name,
      profession,
      experience,
      city,
      phone,
      serviceCost,
      availability,
      description,
    } = formData;

    // Валидация полей
    if (!name.trim()) {
      setErrorMessage("Введите ваше имя.");
      return;
    }

    if (!profession.trim() || profession.length < 3) {
      setErrorMessage("Введите профессию (минимум 3 символа).");
      return;
    }

    const exp = parseInt(experience, 10);
    if (isNaN(exp) || exp < 0 || exp > 50) {
      setErrorMessage("Введите корректный опыт работы (0-50 лет).");
      return;
    }

    if (!city.trim()) {
      setErrorMessage("Введите город.");
      return;
    }

    if (!/^(\+?\d{1,4}[-.\s]?|\d{1,4}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      setErrorMessage("Введите корректный номер телефона.");
      return;
    }

    if (!serviceCost.trim() || isNaN(parseFloat(serviceCost))) {
      setErrorMessage("Введите стоимость услуг (в числовом формате).");
      return;
    }

    if (!availability.trim()) {
      setErrorMessage("Введите график работы.");
      return;
    }

    if (!description.trim() || description.length < 10) {
      setErrorMessage("Введите описание навыков (минимум 10 символов).");
      return;
    }

    // Если всё в порядке
    setSuccessMessage("Вы успешно зарегистрированы как профессионал!");
    setFormData({
      name: "",
      profession: "",
      experience: "",
      city: "",
      phone: "",
      serviceCost: "",
      availability: "",
      description: "",
    });
  };

  return (
    <div className="userRegisterPage">
      <div className="registerHeader">
        <h1>Присоединяйтесь как профессионал</h1>
        <p>
          Заполните форму ниже, чтобы начать продвигать свои услуги и находить
          новых клиентов.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="registerForm">
        <div className="formGroup">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="profession">Профессия:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            placeholder="Например: Электрик, Плотник"
            value={formData.profession}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="experience">Опыт работы (в годах):</label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Ваш опыт"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="city">Город:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ваш город"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+7 777 777 77 77"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="serviceCost">Стоимость услуг (в USD):</label>
          <input
            type="text"
            id="serviceCost"
            name="serviceCost"
            placeholder="Например: 50"
            value={formData.serviceCost}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="availability">График работы:</label>
          <input
            type="text"
            id="availability"
            name="availability"
            placeholder="Например: Пн-Пт с 9:00 до 18:00"
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Описание навыков:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Кратко опишите ваши навыки и специализацию"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="registerButton">
          Зарегистрироваться
        </button>
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
};

export default UserRegisterPage;
