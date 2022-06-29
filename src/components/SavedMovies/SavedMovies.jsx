import React from 'react'
import './SavedMovies.css';

//? Импорты компонентов
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'

export default function SavedMovies({ cardCount, isAuth, handleDeleteFilm, savedMovies }) {

  return (
    <>
      <Header isAuth={isAuth} />
      <SearchForm isSaved cardCount={cardCount} handleDeleteFilm={handleDeleteFilm} savedMovies={savedMovies} />
      <Footer />
    </>
  );
}