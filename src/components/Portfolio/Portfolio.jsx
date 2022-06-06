import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://foxykiss.github.io/How-to-learn/'>
            Статичный сайт
            <button type='button' className='portfolio__button'></button>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://foxykiss.github.io/Russian-travel/'>
            Адаптивный сайт
            <button type='button' className='portfolio__button'></button>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a className='portfolio__link' href='https://foxykiss.github.io/Mesto-main/'>
            Одностраничное приложение
            <button type='button' className='portfolio__button'></button>
          </a>
        </li>
      </ul>
    </section>
  )
}