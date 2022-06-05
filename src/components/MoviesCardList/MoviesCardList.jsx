import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx'

export default function MoviesCardList({ moviesList }) {
  function like(evt) {
    evt.target.classList.toggle('movies-info__like-button_active')
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {moviesList.map((movie) => {
          return (
            <MoviesCard key={movie.movieId} movie={movie} like={like} />
          )
        })}

        <button type="button" className="movies-card-list__button">Ещё</button>
      </ul>
    </section>
  )
}