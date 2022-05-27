import './Header.css'
export default function Header () {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__auth-buttons">
        <button type="button" className="header__button register-button">Регистрация</button>
        <button type="button" className="header__button login-button">Войти</button>
      </div>
    </div>
  );
}