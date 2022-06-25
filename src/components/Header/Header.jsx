import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Navigation from '../Navigation/Navigation.jsx';

export default function Header({ isAuth }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const handleOpenSidebar = () => {
    setIsSidebarOpen(true)
  }
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      {isAuth && (
        <Navigation />
      )}
      {isAuth ? (
        <div className="header__auth-buttons">
          <Link to='profile' className='header__link profile-link'>
            Аккаунт
          </Link>
          <button type='button' className='header__nav-button'></button>
        </div>
      ) : (
        <div className="header__auth-buttons">
          <Link to='sign-up' className='header__link register-link'>
            Регистрация
          </Link>
          <Link to='sign-in' className='header__link login-link'>
            Войти
          </Link>
        </div>
      )}
    </header>
  )
}
