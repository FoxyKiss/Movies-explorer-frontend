import './Main.css'

//? Импорты компонентов
import Header from '../Header/Header.jsx';
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Main({ isLogin, isOpen, closePop, popupHandler }) {

  return (
    <>
      <Header isOpen={isOpen} closePop={closePop} isLogin={isLogin} popupHandler={popupHandler} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};