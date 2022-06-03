import './Header.css'
import { Link } from 'react-router-dom'

//? Импорты компонентов
import Navigation from '../Navigation/Navigation.jsx';

export default function Header({ isLogin }) {
  return (
    <header className="header">
      <Link to='/' className="header__logo"></Link>
      <Navigation isLogin={isLogin} />
      <div className="header__auth-buttons">
        <button type="button" className={`header__button register-button  ${isLogin ? 'hide-block' : ''}`}>
          <Link className="header__button-link" to='sign-up'>Регистрация</Link>
        </button>
        <button type="button" className={`header__button login-button  ${isLogin ? 'hide-block' : ''}`}>
          <Link className="header__button-link" to='sign-up'>Войти</Link>
        </button>
        <button type="button" className={`header__button profile-button ${isLogin ? '' : 'hide-block'}`}>
          <Link className="header__button-link" to='sign-up'>Аккаунт</Link>
        </button>
      </div>
    </header >
  );
}