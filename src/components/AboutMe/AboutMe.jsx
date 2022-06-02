import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__description'>
          <h3 className='about-me__descriprion-title'>Арсений</h3>
          <p className='about-me__description-subtitle'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__description-text'>
            Я очень люблю и горю профессией Frontend-разработчика, нравится менять цвета у кнопок, и создавать крутые продукты для пользователей!
            Поменять сферу деятельности и заняться обучением на Web-разработчика меня побудило желание найти себя, и попасть в дивный мир IT,
            которым я грезил со своих 16 лет!
          </p>
          <ul className='about-me__links'>
            <li><a className='about-me__link' href='https://www.linkedin.com/in/foxkiss98/'>Linkedin</a></li>
            <li><a className='about-me__link' href='https://github.com/FoxyKiss'>Github</a></li>
          </ul>
        </div>
        <div className='about-me__info-image' />
      </div>
      <p className='about-me__subtitle'>Портфолио</p>
      <ul className='about-me__portfolio'>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' href='https://foxykiss.github.io/How-to-learn/'>
            Статичный сайт
            <button type='button' className='about-me__portfolio-button'></button>
          </a>
        </li>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' href='https://foxykiss.github.io/Russian-travel/'>
            Адаптивный сайт
            <button type='button' className='about-me__portfolio-button'></button>
          </a>
        </li>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' href='https://foxykiss.github.io/Mesto-main/'>
            Одностраничное приложение
            <button type='button' className='about-me__portfolio-button'></button>
          </a>
        </li>
      </ul>
    </section>
  );
}