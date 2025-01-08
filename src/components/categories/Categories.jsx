//correctOne
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Импортируем useNavigate
import "./categories.scss";

const Categories = () => {
  const [services, setServices] = useState([]);
  const [postcodes, setPostcodes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [postcodeQuery, setPostcodeQuery] = useState("");
  const [selectedService, setSelectedService] = useState(""); // Сохранение выбранного специалиста
  const [selectedPostcode, setSelectedPostcode] = useState(""); // Сохранение выбранного почтового индекса
  const [serviceSuggestions, setServiceSuggestions] = useState([]);
  const [postcodeSuggestions, setPostcodeSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://66ed151b380821644cdb40e6.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("https://674afbc771933a4e885408ec.mockapi.io/postcode")
      .then((res) => res.json())
      .then((data) => setPostcodes(data));
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = services
        .filter((service) =>
          service.profession.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((service) => service.profession);
      setServiceSuggestions([...new Set(filtered)]);
    } else {
      setServiceSuggestions([]);
    }
  }, [searchQuery, services]);

  useEffect(() => {
    if (postcodeQuery.trim()) {
      const filtered = postcodes.filter(
        (postcode) =>
          postcode.index.includes(postcodeQuery) ||
          postcode.region.toLowerCase().includes(postcodeQuery.toLowerCase())
      );
      setPostcodeSuggestions(filtered);
    } else {
      setPostcodeSuggestions([]);
    }
  }, [postcodeQuery, postcodes]);

  const handleSearch = () => {
    if (!selectedService) {
      alert("Пожалуйста, выберите специалиста из списка.");
      return;
    }
    if (!selectedPostcode) {
      alert("Пожалуйста, выберите почтовый индекс из списка.");
      return;
    }
    // Логика перенаправления
    if (selectedService === "Водопроводчик") {
      navigate("/plumberQuestions");
    } else if (
      selectedService === "Household appliance installation technician"
    ){
      navigate("/houseCleaner");
    } else if (
      selectedService === "Маляр"
    ) {
      navigate("/painterQuestions");
      } else if (
        selectedService === "Электрик"
      ) {
        navigate("/electricianQuestions")
      } else if (
        selectedService === "Сиделка, Няня"
      ) {
        navigate("/caregiverQuestions")
    } else if (
      selectedService === "Техник по ремонту бытовой техники"
    ) {
      navigate("/applianceRepairQuestions")
    } else if (
      selectedService === "Ландшафтный дизайнер"
    ) {
      navigate("/landscapeDesignQuestions")
    }
    else {
      alert(`Для выбранной услуги "${selectedService}" нет доступной страницы.`);
    }
  };
  return (
    <div>
      <div className="categories">
        <div className="categories_item">
          <h1>Услуги специалистов в HandySeekerKG</h1>
        </div>
        <div className="inputs">
          {/* Поле поиска специалистов */}
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Поиск услуг..."
              className="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {serviceSuggestions.length > 0 && searchQuery.trim() && (
              <ul className="suggestionsList">
                {serviceSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      setSelectedService(suggestion);
                      setSearchQuery(suggestion); // Отображаем выбранный текст в поле
                      setServiceSuggestions([]); // Очищаем подсказки
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Поле поиска почтового индекса */}
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Почтовый индекс/район"
              className="searchInput"
              value={postcodeQuery}
              onChange={(e) => setPostcodeQuery(e.target.value)}
            />
            {postcodeSuggestions.length > 0 && postcodeQuery.trim() && (
              <ul className="suggestionsList">
                {postcodeSuggestions.map((postcode, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      // Устанавливаем объект с полями index, region и flag
                      setSelectedPostcode(postcode);
                      setPostcodeQuery(`${postcode.flag} ${postcode.index} - ${postcode.region}`); // Включаем флаг в значение
                      setPostcodeSuggestions([]); // Очищаем подсказки
                    }}
                  >
                    {/* Отображаем index, region и flag */}
                    <span>{postcode.flag} {postcode.index} - {postcode.region}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="searchContainer">
            <button className="searchButton" onClick={handleSearch}>
              Поиск
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;



