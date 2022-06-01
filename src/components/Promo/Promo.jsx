import './Promo.css'

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__description">
        <h1 className="promo__description-title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__description-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button type="button" className="promo__description-button">Узнать больше</button>
      </div>
      <div className="promo__image"></div>
    </section>
  );
};