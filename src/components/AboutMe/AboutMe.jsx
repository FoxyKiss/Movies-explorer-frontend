import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__info-image' />
        <div className='about-me__description'>
          <h3 className='about-me__descriprion-title'>Арсений</h3>
          <p className='about-me__description-subtitle'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__description-text'>
            Я очень люблю и горю профессией Frontend-разработчика, нравится менять цвета у кнопок, и создавать крутые продукты для пользователей!
            Поменять сферу деятельности и заняться обучением на Web-разработчика меня побудило желание найти себя, и попасть в дивный мир IT,
            которым я грезил со своих 16 лет!
          </p>
          <ul className='about-me__links'>
            <li><a target='_blank' className='about-me__link' href='https://www.linkedin.com/in/foxkiss98/' rel="noreferrer">Linkedin</a></li>
            <li><a target='_blank' className='about-me__link' href='https://github.com/FoxyKiss' rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}