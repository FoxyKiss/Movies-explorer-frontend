/* eslint-disable no-underscore-dangle */
import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList({
  isSaved,
  movies,
  dataLength,
  renderCounter,
  setRenderCounter,
  cardCount,
  isBtnVisible,
  setIsBtnVisible,
  handleDeleteFilm,
  handleSaveFilm,
  savedMovies,
  savedArr,
}) {
  const filmDuration = (movie) => `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`


  const renderArray = isSaved ? movies : movies.slice(0, renderCounter)

  const handleAddingBtn = () => {
    if (dataLength - renderCounter <= cardCount) {
      setRenderCounter(renderCounter + (dataLength - renderCounter))
      setIsBtnVisible(false)
    } else {
      setIsBtnVisible(true)
      setRenderCounter(renderCounter + cardCount)
    }
  }
  return (
    <section className="movies-card-list">
      {!isSaved ? (
        <ul className="movies-card-list__list">
          {renderArray &&
            renderArray.map((movie) => (
              <li key={movie.id}>
                <MovieCard
                  movie={movie}
                  filmDuration={filmDuration(movie)}
                  isSaved={isSaved}
                  handleDeleteFilm={handleDeleteFilm}
                  handleSaveFilm={handleSaveFilm}
                  savedMovies={savedMovies}
                />
              </li>
            ))}
        </ul>
      ) : (
        <ul className="movies-card-list__list">
          {renderArray &&
            renderArray.map((movie) => (
              <li key={movie._id}>
                <MovieCard
                  movie={movie}
                  handleDeleteFilm={handleDeleteFilm}
                  isSaved={isSaved}
                  filmDuration={filmDuration(movie)}
                />
              </li>
            ))}
        </ul>
      )}

      {savedArr && (
        <ul className="movies-card-list__list">
          {savedMovies &&
            savedMovies.map((movie) => (
              <li key={movie._id}>
                <MovieCard
                  movie={movie}
                  handleDeleteFilm={handleDeleteFilm}
                  isSaved={isSaved}
                  filmDuration={filmDuration(movie)}
                />
              </li>
            ))}
        </ul>
      )}
      {!isSaved && isBtnVisible && (
        <button onClick={handleAddingBtn} type="button" className="movies-card-list__button">
          Ещё
        </button>
      )}
    </section>
  )
}
