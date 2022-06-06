import './Profile.css';

//? Импорты компонентов
import Header from '../Header/Header.jsx'

export default function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__info">
          <p className="profile__info-text profile-name">Имя<span >Виталий</span></p>
          <p className="profile__info-text profile-email">Email<span>pochta@yandex.ru</span></p>
        </div>
        <div className="profile__buttons">
          <button className="profile__edit-button">Редактировать</button>
          <button className="profile__logout-button">Выйти из Аккаунта</button>
        </div>
      </section>
    </>
  );
}