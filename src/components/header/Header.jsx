// import "./header.scss";
// import Logo from "../../assets/images/logoExperts.jpeg";
// import AppRoutes from "../../routes/AppRoutes";

// const Header = () => {
//   return (
//     <div>
//     <div className="headerPageDiv">
//     <div className="headerPage">
//       <div className="header">
//       <div className="logoExperts">
//         <img className="headerLogo" src={Logo} alt="" />
//             <h2>HandySeekerKG</h2>
//       </div>
//           <div className="headerSearch">
//           <button>Личный кабинет</button>
//         </div>
//       </div>
//     <AppRoutes className="appRoutes"/>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Header


// import { useNavigate } from "react-router-dom";
// import "./header.scss";
// import Logo from "../../assets/images/logoExperts.jpeg";
// import AppRoutes from "../../routes/AppRoutes";

// const Header = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const goToRegistration = () => {
//     navigate("/registration");
//   };

//   return (
//     <div>
//       <div className="headerPageDiv">
//         <div className="headerPage">
//           <div className="header">
//             <div className="logoExperts">
//               <img className="headerLogo" src={Logo} alt="Logo" />
//               <h2>HandySeekerKG</h2>
//             </div>
//             <div className="techSupport">
//               <button>Тех. поддержка</button>
//             </div>
//             <div className="headerSearch">
//               <button onClick={goToRegistration}>Личный кабинет</button>
//             </div>
//           </div>
//           <AppRoutes className="appRoutes" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./header.scss";
import Logo from "../../assets/images/logoExperts.jpeg";
import AppRoutes from "../../routes/AppRoutes";
import ChatSupport from "../../components/supportChat/ChatSupport"; // Импортируем компонент чата

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isChatOpen, setIsChatOpen] = useState(false); // Состояние для модального окна

  const goToRegistration = () => {
    navigate("/registration");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <div className="headerPageDiv">
        <div className="headerPage">
          <div className="header">
            <div className="logoExperts">
              <img className="headerLogo" src={Logo} alt="Logo" />
              <h2>HandySeekerKG</h2>
            </div>
            <div className="techSupport">
              <button onClick={toggleChat}>Тех. поддержка</button>
            </div>
            <div className="headerSearch">
              <button onClick={goToRegistration}>Личный кабинет</button>
            </div>
          </div>
          <AppRoutes className="appRoutes" />
        </div>
      </div>

      {/* Модальное окно с чатом техподдержки */}
      {isChatOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <ChatSupport /> {/* Встраиваем компонент чата */}
            {/* <button className="closeButton" onClick={toggleChat}>
              Закрыть
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
