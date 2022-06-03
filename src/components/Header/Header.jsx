import './Header.css'
import { Link, useHistory } from 'react-router-dom'

export default function Header({ isLogin }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className={`header__navigation ${isLogin ? '' : 'hide-block'}`}>
        <Link to='movies' className="header__navigation-link">Фильмы</Link>
        <Link to='saved-movies' className="header__navigation-link">Сохранённые фильмы</Link>
      </nav>
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