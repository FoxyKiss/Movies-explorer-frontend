import './MoviesCard.css'

export default function MoviesCard({ movie, like }) {
  return (
    <li key={movie.movieId} className="movies-card-list__item">
      <img src={movie.image} alt="Обложка фильма" className="movies-image" />
      <div className="movies-info">
        <h2 className="movies-info__title">{movie.name}</h2>
        <p className="movies-info__duration">{movie.duration}</p>
        <button onClick={like} type="button" className="movies-info__like-button"></button>
      </div>
    </li>
  )
}