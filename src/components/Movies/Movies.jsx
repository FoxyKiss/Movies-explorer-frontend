import './Movies.css';
import image from '../../images/film.png';
//? Импорты компонентов
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import Preloader from '../Preloader/Preloader.jsx'
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx'

export default function Movies() {
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
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
      <Preloader />
      <Footer />
    </>
  );
}