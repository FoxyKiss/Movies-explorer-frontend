import { Link } from 'react-router-dom'
import './MenuPopup.css';

export default function MenuPopup({ closePop, isOpen }) {
  return (
    <div className={`menu-popup ${isOpen ? 'open-popup' : ''}`}>
      <nav className="menu-popup__navigation">
        <Link to='/' className="navigation__link">Главная</Link>
        <Link to='movies' className="navigation__link">Фильмы</Link>
        <Link to='saved-movies' className="navigation__link">Сохранённые фильмы</Link>
      </nav>
      <Link to='profile' className='header__link popup-profile-link'>
        Аккаунт
      </Link>
      <button onClick={closePop} className='menu-popup__close-button'></button>
    </div>
  )
}