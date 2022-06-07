import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

//? Импорты компонентов
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx'
import Login from '../Login/Login.jsx'
import Movies from '../Movies/Movies.jsx'
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import Profile from '../Profile/Profile.jsx';
import NotFound from '../NotFound/NotFound.jsx'
import MenuPopup from '../MenuPopup/MenuPopup.jsx'

function App() {
  //? State переменная статуса авторизации
  const [loggedIn, setLoggedIn] = React.useState(false)

  //? State переменная модального окна
  const [menuPopupOpen, setMenuPopupOpen] = React.useState(false)

  //? Функции изменения стейта для модального окна
  function handleOpenPopup() {
    setMenuPopupOpen(true);
  }

  function handleClosePopup() {
    setMenuPopupOpen(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/"><Main isLogin={loggedIn} popupHandler={handleOpenPopup} /></Route>
        <Route path="/sign-in"><Login /></Route>
        <Route path="/sign-up"><Register /></Route>
        <Route path="/movies"><Movies popupHandler={handleOpenPopup} isLogin={loggedIn} /></Route>
        <Route path="/saved-movies"><SavedMovies popupHandler={handleOpenPopup} isLogin={loggedIn} /></Route>
        <Route path="/profile"><Profile popupHandler={handleOpenPopup} isLogin={loggedIn} /></Route>
        <Route path="/not-found"><NotFound /></Route>
      </Switch >
      <MenuPopup isOpen={menuPopupOpen} closePop={handleClosePopup} />
    </div>
  )
}

export default App;
