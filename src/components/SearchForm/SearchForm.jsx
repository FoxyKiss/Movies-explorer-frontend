import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import formValidationHook from '../../utils/hooks/formValidationHook'
import './SearchForm.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import getMovies from '../../utils/MoviesApi'
import Preloader from '../Preloader/Preloader'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

export default function SearchForm({ isSaved, cardCount, handleSaveFilm, handleDeleteFilm, savedMovies }) {
  const location = useLocation()
  const currentUser = useContext(CurrentUserContext)
  const { values, isValid, setIsValid, handleChange } = formValidationHook({
    search: '',
  })
  const [isError, setIsError] = React.useState(false)
  const [isFinding, setIsFinding] = React.useState(false)
  const [renderCounter, setRenderCounter] = React.useState(cardCount)
  const [dataLength, setDataLenght] = React.useState(0)
  const [moviesStorage, setMoviesStorage] = React.useState([])
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false)
  const [isNothingFound, setIsNothingFound] = React.useState(false)
  const [isShort, setIsShort] = React.useState(false)
  const [shortFilmsArray, setShortFilmsArray] = React.useState([])
  const [filterFilmArray, setFilterFilmArray] = React.useState([])
  const [isNetworkError, setIsNetworkError] = React.useState(false)
  const [isInputDisabled, setIsInputDisabled] = React.useState(false)
  const [isBtnVisible, setIsBtnVisible] = React.useState(false)
  const [isPreviousSearch, setIsPreviousSearch] = React.useState(true)
  const [savedArr, setSavedArr] = React.useState(true)

  React.useEffect(() => {
    const lastSearchMovies = JSON.parse(localStorage.getItem('moviesLongFilms'))
    const lastSearchShortMovies = JSON.parse(localStorage.getItem('moviesShortFilms'))
    const lastSavedSearchMovies = JSON.parse(localStorage.getItem('moviesSavedLongFilms'))
    const lastSavedSearchShortMovies = JSON.parse(localStorage.getItem('moviesSavedShortFilms'))
    if (isSaved) {
      if (lastSavedSearchMovies?.length > 0) {
        setMoviesStorage(lastSavedSearchMovies)
        setFilterFilmArray(lastSavedSearchMovies)
        setShortFilmsArray(lastSavedSearchShortMovies)
        setIsFinding(true)
      }
    } else if (lastSearchMovies?.length > 0) {
      setMoviesStorage(lastSearchMovies)
      setFilterFilmArray(lastSearchMovies)
      setShortFilmsArray(lastSearchShortMovies)
      setIsFinding(true)
      setRenderCounter(cardCount)
      setDataLenght(lastSearchMovies.length)
      if (lastSearchMovies.length > cardCount) {
        setIsBtnVisible(true)
      }
    }
  }, [])
  React.useEffect(() => {
    if (isSaved && !isPreviousSearch) {
      setMoviesStorage(savedMovies)
    }
  }, [savedMovies])

  const filterItems = (arr, query) =>
    arr.filter((movie) => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  const onSubmitForm = (evt) => {
    localStorage.setItem(`${currentUser.email} - movieSearch`, values.search);
    localStorage.setItem(`${currentUser.email} - shortMovies`, isShort);
    setSavedArr(false)
    evt.preventDefault()
    if (isValid) {
      setIsPreviousSearch(false)
      setIsFinding(false)
      if (!isSaved) {
        setIsError(false)
        setIsNetworkError(false)
        setIsInputDisabled(true)
        setIsPreloaderVisible(true)
        getMovies()
          .then((movies) => {
            setRenderCounter(cardCount)
            setIsPreloaderVisible(false)
            setIsInputDisabled(false)
            const filteredFilms = filterItems(movies, values.search)
            const shortFilms = filteredFilms.filter((movie) => movie.duration <= 40)
            localStorage.setItem('moviesLongFilms', JSON.stringify(filteredFilms))
            localStorage.setItem('moviesShortFilms', JSON.stringify(shortFilms))
            setFilterFilmArray(filteredFilms)
            setShortFilmsArray(shortFilms)
            if (isShort) {
              if (shortFilms.length > 0) {
                setMoviesStorage(shortFilms)
                setIsNothingFound(false)
                setIsFinding(true)
                if (shortFilms.length > cardCount) {
                  setIsBtnVisible(true)
                }
              } else {
                setIsNothingFound(true)
                setIsFinding(false)
              }
            } else {
              setDataLenght(filteredFilms.length)
              setIsBtnVisible(filteredFilms.length > cardCount)
              setMoviesStorage(filteredFilms)
              if (filteredFilms.length === 0) {
                setIsNothingFound(true)
                setIsFinding(false)
              } else {
                setIsNothingFound(false)
                setIsFinding(true)
              }
            }
          })
          .catch(() => {
            setIsPreloaderVisible(false)
            setIsNetworkError(true)
            setIsInputDisabled(false)
          })
      } else {
        setIsInputDisabled(true)
        setIsPreloaderVisible(true)
        const filteredSavedFilms = filterItems(savedMovies, values.search)
        const shortSavedFilms = filteredSavedFilms.filter((movie) => movie.duration <= 40)
        localStorage.setItem('moviesSavedShortFilms', JSON.stringify(shortSavedFilms))
        localStorage.setItem('moviesSavedLongFilms', JSON.stringify(filteredSavedFilms))
        setFilterFilmArray(filteredSavedFilms)
        setShortFilmsArray(shortSavedFilms)
        if (isShort) {
          if (shortSavedFilms.length > 0) {
            setMoviesStorage(shortSavedFilms)
            setIsFinding(true)
          } else {
            setIsNothingFound(true)
            setIsFinding(false)
          }
        } else {
          setMoviesStorage(filteredSavedFilms)
          if (filteredSavedFilms.length === 0) {
            setIsNothingFound(true)
            setIsFinding(false)
          } else {
            setIsNothingFound(false)
            setIsFinding(true)
          }
        }
        setIsPreloaderVisible(false)
        setIsInputDisabled(false)
      }
    } else {
      setIsError(true)
    }
  }
  const onShortFilmsCheckbox = () => {
    setIsShort(!isShort)
  }
  React.useEffect(() => {
    if (filterFilmArray.length > 0) {
      if (!isSaved) {
        if (!isShort && filterFilmArray.length > 0) {
          setIsNothingFound(false)
          setIsFinding(true)
        }
        if (isShort && shortFilmsArray.length === 0) {
          setIsNothingFound(true)
          setIsFinding(false)
        }
        if (isShort) {
          setMoviesStorage(shortFilmsArray)
          if (shortFilmsArray.length <= cardCount) {
            setIsBtnVisible(false)
          }
        } else {
          setMoviesStorage(filterFilmArray)
          if (filterFilmArray.length > renderCounter) {
            setIsBtnVisible(true)
          }
        }
      } else {
        if (!isShort && filterFilmArray.length > 0) {
          setIsNothingFound(false)
          setIsFinding(true)
        }
        if (isShort && shortFilmsArray.length === 0) {
          setIsNothingFound(true)
          setIsFinding(false)
        }
        if (isShort) {
          setMoviesStorage(shortFilmsArray)
        } else if (filterFilmArray.length > 0) {
          setMoviesStorage(filterFilmArray)
        } else {
          setMoviesStorage(savedMovies)
        }
      }
    }
  }, [isShort])

  React.useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser.email} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${currentUser.email} - movieSearch`);
      values.search = searchValue;
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [currentUser]);
  return (
    <>
      <section className="search">
        <form className="search__form" name="search" noValidate onSubmit={onSubmitForm}>
          <div className="search__form-field">
            <input
              name="search"
              placeholder="Фильм"
              type="search"
              required
              className="search__form-input"
              onChange={handleChange}
              value={values.search || ''}
              disabled={isInputDisabled}
            />
            <button aria-label="найти фильмы" type="submit" className="search__form-button" />
          </div>
          <span
            className={
              !isError
                ? 'search__form-input-error'
                : 'search__form-input-error search__form-input-error-active'
            }
          >
            Нужно ввести ключевое слово
          </span>
          <label htmlFor="short-films" className="search-form__checkbox">
            <span className="search-form__checkbox-title">Короткометражки</span>
            {isShort && location.pathname === '/movies' ? (<input
              id="short-films"
              checked
              type="checkbox"
              className="search-form__checkbox_input_hidden"
              name="short-films"
              onChange={onShortFilmsCheckbox}
            />) : (<input
              id="short-films"
              type="checkbox"
              className="search-form__checkbox_input_hidden"
              name="short-films"
              onChange={onShortFilmsCheckbox}
            />)}
            <span className="search-form__checkbox_input_visible" />
          </label>
        </form>
      </section>
      {isFinding && moviesStorage.length > 0 && (
        <MoviesCardList
          isSaved={isSaved}
          movies={moviesStorage}
          dataLength={dataLength}
          renderCounter={renderCounter}
          setRenderCounter={setRenderCounter}
          cardCount={cardCount}
          isBtnVisible={isBtnVisible}
          setIsBtnVisible={setIsBtnVisible}
          handleDeleteFilm={handleDeleteFilm}
          handleSaveFilm={handleSaveFilm}
          savedMovies={savedMovies}

        />
      )}
      {savedArr && !isFinding && isSaved && (
        <MoviesCardList
          isSaved={isSaved}
          movies={moviesStorage}
          dataLength={dataLength}
          renderCounter={renderCounter}
          setRenderCounter={setRenderCounter}
          cardCount={cardCount}
          isBtnVisible={isBtnVisible}
          setIsBtnVisible={setIsBtnVisible}
          handleDeleteFilm={handleDeleteFilm}
          handleSaveFilm={handleSaveFilm}
          savedMovies={savedMovies}
          savedArr={savedArr}
        />
      )}

      {isPreloaderVisible && <Preloader />}
      {isNothingFound && <p className="search__form-error">Ничего не найдено</p>}
      {isNetworkError && (
        <p className="search__form-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и
          попробуйте ещё раз.
        </p>
      )}

    </>
  )
}
