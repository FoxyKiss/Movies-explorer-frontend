import './Main.css'

//? Импорты компонентов
import Header from '../Header/Header.jsx';
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Main({ isAuth }) {

  return (
    <>
      <Header isAuth={isAuth} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
};