import { useEffect, useState } from "react";
import "./ourSpecialists.scss";

const OurSpecialist = () => {
  const [specialists, setSpecialists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://66ed151b380821644cdb40e6.mockapi.io/users");
        const data = await response.json();
        setSpecialists(data); // Сохраняем данные в состоянии
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % specialists.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [specialists]);

  const visibleSpecialists = specialists.slice(currentIndex, currentIndex + 2);

  return (
    <div className="ourSpecialists">
      <div className="ourSpecialistsCards">
        {visibleSpecialists.map((specialist) => (
          <div key={specialist.id} className="cards">
            <img src={specialist.avatar} alt={specialist.name} className="avatar" />
             <h2>{specialist.name}</h2>
            <p className="profession">{specialist.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialist;
