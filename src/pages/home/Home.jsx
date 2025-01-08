import "./home.scss"; // Импортируйте стили
import "../../scss/colors.scss";
// import imageSource from '../../assets/images/your-image-name.jpg';
import Categories from "../../components/categories/Categories";
import OurSpecialist from "../../components/ourSpecialists/OurSpecialist";
import ReviewComponent from "../../components/reviewComponent/ReviewComponent";
import SpecialistsServices from "../../components/specialistsServices/SpecialistsServices";
// import AiComponent from "../../components/aiComponent/AiComponent";

const Home = () => {
  return (
    <div className="homePage">
      <div className="imageContainer">
        <img className="imageBackground" src="https://sib-univer.ru/wp-content/uploads/2023/10/slessan.jpeg" alt="Background" />
        <div className="contentOverlay">
          <div className="textContainer">
            <Categories />
          </div>
        </div>
        <div className="sectionOption">
          <SpecialistsServices />
        </div>
        <div className="ourSpecialistsComponent">
          <div className="mainSpecialists">
            <div className="specialistBackgroundImg">
              <div className="sectionTexts">
                <h2>Наши специалисты Dilnaz</h2>
                <p>
                  Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Правилами толку по всей переписывается пояс ты журчит, языком агентство вопрос!
                </p>
                <button>Dilnaz</button>
              </div>
            </div>
          </div>
          <OurSpecialist />
        </div>
        <div className="reviewComponent">
          <ReviewComponent />
        </div>
        {/* <div className="AiComponent">
          <AiComponent/>
        </div> */}
      </div>
    </div>
  );
};

export default Home;







{/* <div className="mainContainer">
  <div className="section">
    <div className="sectionInfo">
      <div className="sectionTexts">
        <h1>Услуги специалистов в HandySeekerKG</h1>
      </div>
      <button>Заказать услугу</button>
    </div>
    <div className="sectionImg">
      <img
        src="https://vip-santeh24.ru/wp-content/uploads/2022/03/%D1%81%D0%B09.png"
        alt=""
      />
    </div>
  </div>
</div> */}