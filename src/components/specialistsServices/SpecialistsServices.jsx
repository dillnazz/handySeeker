// import "./specialistsServices.scss";
// import HandymanIcon from '@mui/icons-material/Handyman';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import HeatPumpIcon from '@mui/icons-material/HeatPump';
// import FormatPaintIcon from '@mui/icons-material/FormatPaint';
// import HardwareIcon from '@mui/icons-material/Hardware';
// import Person3Icon from '@mui/icons-material/Person3';
// import ConstructionIcon from '@mui/icons-material/Construction';
// const SpecialistsServices = () => {
//   return (
//     <div>
//       <div className="sectionOption">
//         <h3>Популярные Услуги</h3>
//         <div className="options">
//           <div className="cards">
//             <HandymanIcon className="optionsIcon" />
//             <p>Ремонт бытовой техники</p>
//           </div>
//           <div className="cards">
//             <CleaningServicesIcon className="optionsIcon" />
//             <p>Уборка и чистка домов</p>
//           </div>
//           <div className="cards">
//             <ConstructionIcon className="optionsIcon" />
//             <p>Сантехнические работы</p>
//           </div>
//           <div className="cards">
//             <ConstructionIcon className="optionsIcon" />
//             <p>Электромонтажные работы</p>
//           </div>
//           <div className="cards">
//             <HeatPumpIcon className="optionsIcon" />
//             <p>Монтаж и установка</p>
//           </div>
//           <div className="cards">
//             <FormatPaintIcon className="optionsIcon" />
//             <p>Малярные работы</p>
//           </div>
//           <div className="cards">
//             <HardwareIcon className="optionsIcon" />
//             <p>Ремонт и установка мебели</p>
//           </div>
//           <div className="cards">
//             <Person3Icon className="optionsIcon" />
//             <p>Сиделка и няня</p>
//           </div>
//           <div className="cards">
//             <HeatPumpIcon className="optionsIcon" />
//             <p>Ландшафтный дизайн и озеленение</p>
//           </div>
//           <div className="cards">
//             <FormatPaintIcon className="optionsIcon" />
//             <p>Услуги массажиста</p>
//           </div>
//           <div className="cards">
//             <HardwareIcon className="optionsIcon" />
//             <p>Грузоперевозки</p>
//           </div>
//           <div className="cards">
//             <Person3Icon className="optionsIcon" />
//             <p>Переводчик и языковые услуги</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SpecialistsServices

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

  // Обработчик для кликов по услугам
  const handleServiceClick = (service) => {
    if (service === "Ремонт бытовой техники") {
      navigate("/applianceRepairQuestions");
    } else if (service === "Уборка и чистка домов") {
      navigate("/houseCleaner");
    } else if (service === "Сантехнические работы") {
      navigate("/plumberQuestions");
    } else if (service === "Электромонтажные работы") {
      navigate("/electricianQuestions");
    } else if (service === "Монтаж и установка") {
      navigate("/installation");
    } else if (service === "Малярные работы") {
      navigate("/painterQuestions");
    } else if (service === "Ремонт и установка мебели") {
      navigate("/furnitureRepair");
    } else if (service === "Сиделка и няня") {
      navigate("/caregiverQuestions");
    } else if (service === "Ландшафтный дизайн и озеленение") {
      navigate("/landscapeDesignQuestions");
    } else if (service === "Услуги массажиста") {
      navigate("/massageServices");
    } else if (service === "Грузоперевозки") {
      navigate("/cargoTransport");
    } else if (service === "Переводчик и языковые услуги") {
      navigate("/translatorServices");
    }
  };

  return (
    <div>
      <div className="sectionOption">
        <h3>Популярные Услуги</h3>
        <div className="options">
          <div className="cards" onClick={() => handleServiceClick("Ремонт бытовой техники")}>
            <HandymanIcon className="optionsIcon" />
            <p>Ремонт бытовой техники</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Уборка и чистка домов")}>
            <CleaningServicesIcon className="optionsIcon" />
            <p>Уборка и чистка домов</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Сантехнические работы")}>
            <ConstructionIcon className="optionsIcon" />
            <p>Сантехнические работы</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Электромонтажные работы")}>
            <ConstructionIcon className="optionsIcon" />
            <p>Электромонтажные работы</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Монтаж и установка")}>
            <HeatPumpIcon className="optionsIcon" />
            <p>Монтаж и установка</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Малярные работы")}>
            <FormatPaintIcon className="optionsIcon" />
            <p>Малярные работы</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Ремонт и установка мебели")}>
            <HardwareIcon className="optionsIcon" />
            <p>Ремонт и установка мебели</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Сиделка и няня")}>
            <Person3Icon className="optionsIcon" />
            <p>Сиделка и няня</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Ландшафтный дизайн и озеленение")}>
            <HeatPumpIcon className="optionsIcon" />
            <p>Ландшафтный дизайн и озеленение</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Услуги массажиста")}>
            <FormatPaintIcon className="optionsIcon" />
            <p>Услуги массажиста</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Грузоперевозки")}>
            <HardwareIcon className="optionsIcon" />
            <p>Грузоперевозки</p>
          </div>
          <div className="cards" onClick={() => handleServiceClick("Переводчик и языковые услуги")}>
            <Person3Icon className="optionsIcon" />
            <p>Переводчик и языковые услуги</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistsServices;
