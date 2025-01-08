import { useState, useEffect } from "react";
import axios from "axios";
import "./contact.scss";

export const Contact = () => {
  const [users, setUsers] = useState([]); // Состояние для хранения данных пользователей
  const [editingUser, setEditingUser] = useState(null); // Состояние для редактируемого пользователя

  // Получение данных из API при загрузке страницы
  useEffect(() => {
    axios.get("https://66ed151b380821644cdb40e6.mockapi.io/users")
      .then((response) => {
        setUsers(response.data); // Установка данных пользователей
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  // Функция для обновления данных пользователя
  const handleUpdate = (id) => {
    axios.put(`https://66ed151b380821644cdb40e6.mockapi.io/users/${id}`, editingUser)
      .then((response) => {
        // Обновить локальные данные после успешного обновления на сервере
        setUsers(users.map(user => (user.id === id ? response.data : user)));
        setEditingUser(null); // Сброс редактируемого пользователя
      })
      .catch((error) => {
        console.error("Ошибка при обновлении данных:", error);
      });
  };

  // Функция для редактирования пользователя
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Функция для изменения полей редактируемого пользователя
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value,
    });
  };

  return (
    <div className="contactPage">
      <h1>Админ-панель для управления пользователями</h1>
      <div className="userList">
        {users.map((user) => (
          <div key={user.id} className="userCard">
            {editingUser && editingUser.id === user.id ? (
              // Форма редактирования
              <div>
                <input
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleChange}
                  placeholder="Имя"
                />
                <input
                  type="text"
                  name="profession"
                  value={editingUser.profession}
                  onChange={handleChange}
                  placeholder="Профессия"
                />
                <input
                  type="text"
                  name="description"
                  value={editingUser.description}
                  onChange={handleChange}
                  placeholder="Описание"
                />
                <input
                  type="text"
                  name="avatar"
                  value={editingUser.avatar}
                  onChange={handleChange}
                  placeholder="URL аватара"
                />
                <button onClick={() => handleUpdate(user.id)}>Сохранить</button>
                <button onClick={() => setEditingUser(null)}>Отмена</button>
              </div>
            ) : (
              // Отображение данных пользователя
              <div>
                <img src={user.avatar} alt={user.name} className="avatar" />
                <h3>{user.name}</h3>
                <p>{user.profession}</p>
                <p>{user.description}</p>
                <button onClick={() => handleEdit(user)}>Редактировать</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

