
import React from 'react'
import './MoviesCard.css'

export default function MoviesCard({ movie, filmDuration, isSaved, handleDeleteFilm, handleSaveFilm, savedMovies }) {
  const aproovedMovie = {
    country: movie.country || 'Нет данных',
    director: movie.director || 'Нет данных',
    duration: movie.duration || 0,
    year: movie.year || 'Нет данных',
    description: movie.description || ' ',
    image: isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`,
    trailer: isSaved ? movie.trailer : movie.trailerLink || 'https://youtube.com',
    thumbnail: isSaved ? movie.thumbnail : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    movieId: isSaved ? movie._id : movie.id,
    nameRU: movie.nameRU || 'Нет данных',
    nameEN: movie.nameEN || 'Нет данных',
  }
  const [isLiked, setIsLiked] = React.useState(false)
  const [deletingMovieId, setIsDeletingMovieId] = React.useState('0')
  React.useEffect(() => {
    if (savedMovies) {
      if (!isSaved) {
        const checkSave = savedMovies?.find((item) => +item.movieId === +movie.id)
        if (checkSave) {
          setIsLiked(true)
        } else {
          setIsLiked(false)
        }
      }
    }
  }, [])
  React.useEffect(() => {
    if (savedMovies) {
      if (!isSaved) {
        const checkSave = savedMovies.find((item) => +item.movieId === +movie.id)
        if (checkSave) {
          setIsLiked(true)
          aproovedMovie.movieId = checkSave._id
          setIsDeletingMovieId(checkSave._id)
        } else {
          setIsLiked(false)
        }
      }
    }
  })

  const handleOpenTrailer = () => {
    window.open(`${aproovedMovie.trailer}`, `Трейлер фильма "${aproovedMovie.nameRU}"`)
  }
  const handleLikeClick = async () => {
    if (isSaved) {
      handleDeleteFilm({ movieId: aproovedMovie.movieId })
    } else if (isLiked) {
      handleDeleteFilm({ movieId: deletingMovieId })
    } else {
      handleSaveFilm({ movie: aproovedMovie })
    }
  }
  return (
    <div className="movies-card-list__item">
      <img
        className="movies-image"
        alt="картинка фильма"
        src={aproovedMovie.image}
        onClick={handleOpenTrailer}
      />
      <div className="movies-info">
        <h3 className="movies-info__title">{aproovedMovie.nameRU}</h3>
        <p className="movies-info__duration">{filmDuration}</p>
        {isSaved && (
          <button
            aria-label="delete"
            onClick={handleLikeClick}
            type="button"
            className="movies-info__like-button movies-button_type_active"
          />
        )}
        {!isSaved && (
          <button
            aria-label="like"
            type="button"
            onClick={handleLikeClick}
            className={
              isLiked
                ? `movies-info__like-button movies-button_type_active`
                : `movies-info__like-button movies-button_type_disabled`
            }
          />
        )}
      </div>
    </div>
  )
}
