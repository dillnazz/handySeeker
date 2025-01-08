// import React from "react";
import { useNavigate } from "react-router-dom";
import "./specialistsServices.scss";
import HandymanIcon from "@mui/icons-material/Handyman";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import HardwareIcon from "@mui/icons-material/Hardware";
import Person3Icon from "@mui/icons-material/Person3";
import ConstructionIcon from "@mui/icons-material/Construction";

const SpecialistsServices = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceName) => {
    // Можно передать дополнительные параметры (например, имя услуги)
    navigate("/questionPage", { state: { service: serviceName } });
  };

  const services = [
    { id: 1, name: "Ремонт бытовой техники", icon: <HandymanIcon className="optionsIcon" /> },
    { id: 2, name: "Уборка и чистка домов", icon: <CleaningServicesIcon className="optionsIcon" /> },
    { id: 3, name: "Сантехнические работы", icon: <ConstructionIcon className="optionsIcon" /> },
    { id: 4, name: "Электромонтажные работы", icon: <ConstructionIcon className="optionsIcon" /> },
    { id: 5, name: "Монтаж и установка", icon: <HeatPumpIcon className="optionsIcon" /> },
    { id: 6, name: "Малярные работы", icon: <FormatPaintIcon className="optionsIcon" /> },
    { id: 7, name: "Ремонт и установка мебели", icon: <HardwareIcon className="optionsIcon" /> },
    { id: 8, name: "Сиделка и няня", icon: <Person3Icon className="optionsIcon" /> },
    { id: 9, name: "Ландшафтный дизайн и озеленение", icon: <HeatPumpIcon className="optionsIcon" /> },
    { id: 10, name: "Услуги массажиста", icon: <FormatPaintIcon className="optionsIcon" /> },
    { id: 11, name: "Грузоперевозки", icon: <HardwareIcon className="optionsIcon" /> },
    { id: 12, name: "Переводчик и языковые услуги", icon: <Person3Icon className="optionsIcon" /> },
  ];

  return (
    <div>
      <div className="sectionOption">
        <h3>Популярные Услуги</h3>
        <div className="options">
          {services.map((service) => (
            <div
              key={service.id}
              className="cards"
              onClick={() => handleCardClick(service.name)}
            >
              {service.icon}
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialistsServices;
