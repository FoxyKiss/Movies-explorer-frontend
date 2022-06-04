import './MoviesCardList.css';
import image from '../../images/film.png';


export default function MoviesCardList() {
  const moviesList =
    [
      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '5',
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '4',
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '3',
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '1',
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '6'
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '10'
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '0'
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '1234'
      },

      {
        name: '33 Слова о дизайне',
        image: image,
        duration: '1ч 47м',
        movieId: '90'
      },

    ];

  function like(evt) {
    evt.target.classList.toggle('movies-info__like-button_active')
  }
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {moviesList.map((movie) => {
          return (

          )
        })}
      </ul>
    </section>
  )
}