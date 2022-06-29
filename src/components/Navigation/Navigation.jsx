import { Link } from 'react-router-dom'
import './Navigation.css'


export default function Navigation() {
  return (
    <>
      <nav className='navigation'>
        <Link to='movies' className="navigation__link">Фильмы</Link>
        <Link to='saved-movies' className="navigation__link">Сохранённые фильмы</Link>
      </nav>
    </>

  );
}