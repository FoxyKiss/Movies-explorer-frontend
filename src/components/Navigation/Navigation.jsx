import { Link } from 'react-router-dom'
import './Navigation.css'


export default function Navigation({ isLogin }) {
  return (
    <>
      <nav className={`navigation ${isLogin ? '' : 'hide-block'}`}>
        <Link to='movies' className="navigation__link">Фильмы</Link>
        <Link to='saved-movies' className="navigation__link">Сохранённые фильмы</Link>
      </nav>
    </>

  );
}