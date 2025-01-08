import Home from '../pages/home/Home';
import { Link, Routes, Route } from 'react-router-dom';
import Services from '../pages/services/Services';
import Reviews from '../pages/reviews/Reviews';
import { Specialists } from '../pages/specialists/Specialists';
import { Contact } from '../pages/contact/Contact';
import "./appRoutes.scss";
import RegistrationPage from '../pages/registration/RegistrationPage';
import PlumberQuestions from '../components/questionsForUsers/plumberQuestions/PlumberQuestions';
// import QuestionPage from '../pages/questionsPage/QuestionPage';
import ElectricianQuestions from '../components/questionsForUsers/electrician/ElectricianQuestions';
import PainterQuestions from '../components/questionsForUsers/painterQuestion/PainterQuestion';
import CaregiverQuestions from "../components/questionsForUsers/caregiverQuestions/CaregiverQuestions";
import ApplianceRepairQuestions from "../components/questionsForUsers/applianceRepairQuestions/ApplianceRepairQuestions";
import LandscapeDesignQuestions from '../components/questionsForUsers/landscapeDesignQuestions /LandscapeDesignQuestions ';
import CleanerQuestions from '../components/questionsForUsers/cleanerQuestions/CleanerQuestions';
import { Register } from '../components/register/Register';
import CompleteRegistration from '../pages/registration/completeRegistration';
import UserRegisterPage from '../pages/userRegisterPage/UserRegisterPage';

const AppRoutes = () => {
  return (
    <div>
    <div className="routes">
      <Link className='link' to="/">Главная</Link>
        <Link className='link' to="/services">Услуги</Link>
        {/* <Link className='link' to="/reviews">Отзывы</Link> */}
        {/* <Link className='link' to="/specialists">Специалисты</Link> */}
        <Link className='link' to="/contact">Edit</Link>
    </div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/> } />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/specialists" element={<Specialists/> } />
      <Route path="/contact" element={<Contact/> } />
      {/* <Route path='/questionsPage' element={<QuestionPage/> }/> */}
      <Route path="/registration" element={<RegistrationPage/> } />
      <Route path="/plumberQuestions" element={<PlumberQuestions/> } />
        <Route path="/painterQuestions" element={<PainterQuestions/> } />
        <Route path="/electricianQuestions" element={<ElectricianQuestions/>}/>
        <Route path="/caregiverQuestions" element={<CaregiverQuestions />} />
        <Route path='/applianceRepairQuestions' element={<ApplianceRepairQuestions/>} />
        <Route path='/landscapeDesignQuestions' element={<LandscapeDesignQuestions />} />
      <Route path="/houseCleaner" element={<CleanerQuestions/> } />
      <Route path="/registration" element = { <Register/> } />
        <Route path="/complete-registration" element={<CompleteRegistration/> } />
        <Route path="/specialistRegisterPage" element={<UserRegisterPage/> } />

    </Routes>
    </div>
  )
}

export default AppRoutes