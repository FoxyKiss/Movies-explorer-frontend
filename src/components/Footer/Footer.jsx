import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__info">
        <p className='footer__copyright'>© 2020</p>
        <ul className='footer__links'>
          <li><a target='blank' className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a></li>
          <li><a target='blank' className='footer__link' href='https://github.com/FoxyKiss'>Github</a></li>
          <li><a target='blank' className='footer__link' href='https://www.linkedin.com/in/foxkiss98/'>LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}