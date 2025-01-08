import { useState, useEffect } from "react";
import "./specialists.scss";

export const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSpecialists, setFilteredSpecialists] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://66ed151b380821644cdb40e6.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setSpecialists(data);
        setFilteredSpecialists(data); // Initially display all specialists
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    // Filter specialists by profession
    const filtered = specialists.filter((specialist) =>
      specialist.profession.toLowerCase().includes(query)
    );
    setFilteredSpecialists(filtered);
  };

  const handleButtonClick = (name) => {
    console.log(`More details about: ${name}`);
    alert(`More details about: ${name}`);
  };

  return (
    <div className="specialistPage">
      <div className="sectionOne">
        <input
          type="text"
          placeholder="Поиск по профессии..."
          value={search}
          onChange={handleSearch}
          className="searchInput"
        />
        <div className="specialistCards">
          {filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist) => (
              <div className="card" key={specialist.id}>
                <img
                  src={specialist.avatar}
                  alt={`${specialist.name}`}
                  className="cardAvatar"
                />
                <h3>{specialist.name}</h3>
                <p><strong>Profession:</strong> {specialist.profession}</p>
                <p><strong>Description:</strong> {specialist.description}</p>
                <button
                  onClick={() => handleButtonClick(specialist.name)}
                  className="detailsButton"
                >
                  Подробнее
                </button>
              </div>
            ))
          ) : (
              <p>Специалистов по данной профессии не найдено.</p>
          )}
        </div>
      </div>
    </div>
  );
};
