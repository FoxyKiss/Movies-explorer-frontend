import { Link } from 'react-router-dom'
import './Header.css'


//? Импорты компонентов
import Navigation from '../Navigation/Navigation.jsx';

export default function Header({ isLogin, popupHandler }) {
  const darkThemePath = window.location.pathname === '/saved-movies' || window.location.pathname === '/movies' || window.location.pathname === '/profile'

  return (
    <header className={`header ${darkThemePath ? 'header_theme_dark' : ''}`}>
      <Link to='/' className="header__logo"></Link>
      <Navigation isLogin={isLogin} />
      <div className="header__auth-buttons">
        <Link to='sign-up' className={`header__link register-link ${isLogin ? 'hide-block' : ''}`}>
          Регистрация
        </Link>
        <Link to='sign-in' className={`header__link login-link ${isLogin ? 'hide-block' : ''}`}>
          Войти
        </Link>
        <Link to='profile' className={`header__link profile-link ${isLogin ? '' : 'hide-block'}`}>
          Аккаунт
        </Link>
        <button type='button' onClick={popupHandler} className={`header__nav-button ${isLogin ? '' : 'hide-block'}`}></button>
      </div>
    </header >
  );
}