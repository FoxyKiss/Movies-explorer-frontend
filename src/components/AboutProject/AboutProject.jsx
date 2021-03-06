import './AboutProject.css'

export default function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__description'>
        <li>
          <h3 className='about-project__description-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className='about-project__description-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__description-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className='about-project__duration'>
        <li>
          <h3 className='about-project__duration-title small-title'>1 неделя</h3>
          <p className='about-project__duration-text'>Back-end</p>
        </li>
        <li>
          <h3 className='about-project__duration-title large-title'>4 недели</h3>
          <p className='about-project__duration-text'>Front-end</p>
        </li>
      </ul>
    </section>
  );
};