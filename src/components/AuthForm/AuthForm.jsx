import { Link } from 'react-router-dom'
import './AuthForm.css';

export default function AuthForm({ formProps }) {
  return (
    <div className="auth-container">
      <div className="auth-container__header">
        <Link to='/'><div className="auth-container__logo"></div></Link>
        <h2 className="auth-container__title">{formProps.title}</h2>
      </div>
      <form id={formProps.formId} className="auth-form">
        <label className={`auth-form__label ${formProps.nameField ? '' : 'hide-label'}`}>
          <p className="auth-form__label-name">Имя</p>
          <input id="name" name="name" className="auth-form__input" type="text" placeholder="Имя" required
            minLength="2" maxLength="40" />
        </label>

        <label className="auth-form__label">
          <p className="auth-form__label-name">E-mail</p>
          <input id="email" name="email" className="auth-form__input " type="email" placeholder="E-mail" required
            minLength="2" maxLength="40" />
        </label>
        <label className="auth-form__label popup__input-label">
          <p className="auth-form__label-name">Пароль</p>
          <input id="paswword" name="password" className="auth-form__input " type="password" placeholder="Пароль" required
            minLength="2" maxLength="200" autoComplete="off" />
        </label>
        <button className={`auth-form__submit ${formProps.indentClass}`} type="submit">{formProps.buttonText}</button>
        <p className="auth-form__sentence">{formProps.sentence} <Link to={formProps.path} className="auth-form__link">{formProps.linkText}</Link></p>
      </form >
    </div >
  );
}