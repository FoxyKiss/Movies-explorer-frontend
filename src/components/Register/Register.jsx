import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import formValidationHook from '../../utils/hooks/formValidationHook'

export default function register({ handleRegister, registerNetworkError }) {
  const { values, isValid, handleChange, errors } = formValidationHook({
    email: '',
    password: '',
    name: '',
  })

  const onRegisterSumbit = (evt) => {
    evt.preventDefault()
    if (isValid) {
      handleRegister({ email: values.email, name: values.name, password: values.password })
    }
  }

  return (

    <div className="auth-container">
      <div className="auth-container__header">
        <Link to="/"><div className="auth-container__logo" /></Link>
        <h2 className="auth-container__title">Добро пожаловать!</h2></div>
      <form name="register" className="auth-form" noValidate onSubmit={onRegisterSumbit}>
        <label className="auth-form__label">
          <p className="auth-form__label-name">Имя</p>
          <input
            type="text"
            name="name"
            className={errors.name ? 'auth-form__input auth-form__input_type_error' : 'auth-form__input'}
            minLength="2"
            maxLength="18"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="auth-form__label">
          <p className="auth-form__label-name">E-mail</p>
          <input
            name="email"
            type="email"
            className={errors.email ? 'auth-form__input auth-form__input_type_error' : 'auth-form__input'}
            value={values.email}
            onChange={handleChange}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
        </label>
        <label className="auth-form__label">
          <p className="auth-form__label-name">Пароль</p>
          <input
            name="password"
            type="password"
            className={errors.password ? 'auth-form__input auth-form__input_type_error' : 'auth-form__input'}
            value={values.password}
            onChange={handleChange}
            minLength="8"
            maxLength="35"
            required
          />
          <span
            className={
              !isValid ? 'auth-form__input-error auth-form__input-error_active' : 'auth-form__input-error'
            }
          >
            {errors?.email} {errors?.password}
          </span>
          <span
            className={
              registerNetworkError
                ? 'auth-form__input-error auth-form__input-error_active'
                : 'auth-form__input-error'
            }
          >
            {registerNetworkError}
          </span>
        </label>
        <button type="submit" className="auth-form__submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <p className="auth-form__sentence">
          Уже зарегистрированы?{' '}
          <Link className="auth-form__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </form>
    </div >


  )
}
