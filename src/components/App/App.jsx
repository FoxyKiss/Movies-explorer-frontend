
import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import {
  register,
  login,
  getUserInformation,
  editProfile,
  saveMovies,
  deleteSavedMovies,
  getMovies,
} from '../../utils/MainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import NotFound from '../NotFound/NotFound'
import UnProtectedRoute from '../UnProtectedRoute/UnProtectedRoute'

function App() {
  const history = useHistory()
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
  const [cardCount, setCardCount] = React.useState(window.innerWidth > 500 ? 7 : 5)
  const [currentUser, setCurrentUser] = React.useState({})
  const [registerNetworkError, setRegisterNetworkError] = React.useState('')
  const [loginNetworkError, setLoginNetworkError] = React.useState('')
  const [updProfileNetworkError, setUpdProfileNetworkError] = React.useState('')
  const [savedMovies, setSavedMovies] = React.useState([])
  const [isAuth, setIsAuth] = React.useState(false)
  const [isSuccessSubmit, setIsSuccessSubmit] = React.useState(false)
  const handleResize = () => {

    setScreenWidth(window.innerWidth)
  }

  const filterUserSavedFilms = (savedFilms, userId) => savedFilms.filter((film) => film.owner === userId)
  const tokenCheck = () => {
    const token = localStorage.getItem('token')
    if (token) {
      getUserInformation()
        .then((userInfo) => {
          if (userInfo.user.name) {
            setCurrentUser(userInfo.user)
            setIsAuth(true)
            const savedFilms = JSON.parse(localStorage.getItem('films'))
            setSavedMovies(savedFilms)
          }
        })
        .catch((err) => {
          localStorage.clear()
          return console.log(err)
        })
    }
  }
  React.useEffect(() => {
    tokenCheck()
  }, [])
  React.useEffect(() => {
    window.addEventListener('resize', () =>
      setTimeout(() => {
        handleResize()
      }, 1000),
    )
  }, [])
  React.useEffect(() => {
    setCardCount(window.innerWidth > 500 ? 7 : 5)
  }, [screenWidth])

  const handleLogin = ({ email, password }) => {
    setLoginNetworkError('')
    login(email, password)
      .then((loginResponse) => {
        localStorage.setItem('token', loginResponse.token)
        getUserInformation()
          .then((userInfo) => {
            if (userInfo.user.name) {
              setCurrentUser(userInfo.user)
              setIsAuth(true)
              const curUserID = userInfo.user._id
              getMovies()
                .then((res) => {
                  const serverFilms = res.movies
                  console.log(res.movies)
                  const userSavedFilms = filterUserSavedFilms(serverFilms, curUserID)
                  setSavedMovies(userSavedFilms)
                  localStorage.setItem('films', JSON.stringify(userSavedFilms))
                })
                .catch((err) => console.log(err))
              history.push('/movies')
            }
          })
          .catch((err) => {
            if (err.status === 401) {
              setLoginNetworkError('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
            } else if (err.status === 'Ошибка: 404') {
              setLoginNetworkError('При авторизации произошла ошибка. Переданный токен некорректен.')
            } else {
              setLoginNetworkError(
                'При авторизации пользователя произошла ошибка. Пожалуйста, попробуйте повторить авторизацию позже.',
              )
            }
          })
      })
      .catch((err) => {
        if (err.status === 401) {
          setLoginNetworkError('Вы ввели неправильный логин или пароль.')
        } else {
          setLoginNetworkError(
            'При авторизации пользователя произошла ошибка. Пожалуйста, попробуйте повторить авторизацию позже.',
          )
        }
      })
  }

  const handleRegister = ({ name, email, password }) => {
    setRegisterNetworkError('')
    register(name, email, password)
      .then((response) => {
        setCurrentUser(response.data)
        handleLogin({ email, password })
      })
      .catch((err) => {
        if (err.status === 409) {
          setRegisterNetworkError('Пользователь с таким email уже существует.')
        } else {
          setRegisterNetworkError('При регистрации пользователя произошла ошибка.')
        }
      })
  }

  const handleEditProfile = ({ name, email }) => {
    setUpdProfileNetworkError('')
    setIsSuccessSubmit(false)
    editProfile(name, email)
      .then((res) => {
        setCurrentUser(res.user)
        setIsSuccessSubmit(true)
      })
      .catch((err) => {
        if (err.status === 409) {
          setUpdProfileNetworkError(`E-mail ${email} уже занят`)
        } else {
          setUpdProfileNetworkError(
            'При обновление информации о пользователе произошла ошибка. Пожалуйста, попробуйте позже.',
          )
        }
      })
  }

  const handleExitAccount = () => {
    localStorage.clear()
    setIsAuth(false)
    setCurrentUser('')
    history.push('/')
  }

  const handleSaveFilm = ({ movie }) => {
    saveMovies(movie)
      .then(() => {
        getMovies()
          .then((res) => {
            const serverFilms = res.movies
            const userSavedFilms = filterUserSavedFilms(serverFilms, currentUser._id)
            setSavedMovies(userSavedFilms)
            localStorage.setItem('films', JSON.stringify(userSavedFilms))
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteFilm = ({ movieId }) => {
    deleteSavedMovies(movieId)
      .then(() => {
        getMovies()
          .then((res) => {
            const serverFilms = res.movies
            const userSavedFilms = filterUserSavedFilms(serverFilms, currentUser._id)
            setSavedMovies(userSavedFilms)
            localStorage.setItem('films', JSON.stringify(userSavedFilms))
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Switch>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            cardCount={cardCount}
            isAuth={isAuth}
            handleSaveFilm={handleSaveFilm}
            handleDeleteFilm={handleDeleteFilm}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            cardCount={cardCount}
            isAuth={isAuth}
            handleDeleteFilm={handleDeleteFilm}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            updProfileNetworkError={updProfileNetworkError}
            handleEditProfile={handleEditProfile}
            handleExitAccount={handleExitAccount}
            isAuth={isAuth}
            isSuccessSubmit={isSuccessSubmit}
          />
          <UnProtectedRoute
            exact
            path="/sign-up"
            component={Register}
            handleRegister={handleRegister}
            registerNetworkError={registerNetworkError}
            isAuth={isAuth}
          />
          <UnProtectedRoute
            exact
            path="/sign-in"
            component={Login}
            handleLogin={handleLogin}
            loginNetworkError={loginNetworkError}
            isAuth={isAuth}
          />
          <Route exact path="/">
            <Main isAuth={isAuth} />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
