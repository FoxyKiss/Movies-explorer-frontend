import { Link } from 'react-router-dom'
import './Header.css'


//? Импорты компонентов
import Navigation from '../Navigation/Navigation.jsx';

export default function Header({ isLogin }) {
  return (
    <header className="header">
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
      </div>
    </header >
  );
}