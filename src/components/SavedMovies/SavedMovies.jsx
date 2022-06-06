import './SavedMovies.css';

//? Импорты компонентов
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import Preloader from '../Preloader/Preloader.jsx'
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx'

export default function SavedMovies({ isLogin, popupHandler }) {
  const moviesList = []

  return (
    <>
      <Header popupHandler={popupHandler} isLogin={isLogin} />
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
      <Preloader />
      <Footer />
    </>
  );
}