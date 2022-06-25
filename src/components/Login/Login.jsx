import React from 'react'
import { Link } from 'react-router-dom'
import formValidationHook from '../../utils/hooks/formValidationHook'
import './Login.css'

export default function login({ handleLogin, loginNetworkError }) {
  const { values, isValid, handleChange, errors } = formValidationHook({
    email: '',
    password: '',
  })

  const onFormSumbit = (evt) => {
    evt.preventDefault()
    if (isValid) {
      handleLogin({ email: values.email, password: values.password })
    }
  }

  return (

    <div className="auth-container">
      <div className="auth-container__header">
        <Link to="/"><div className="auth-container__logo" /></Link>
        <h2 className="auth-container__title">Рады видеть!</h2></div>
      <form name="login" className="auth-form" noValidate onSubmit={onFormSumbit}>
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
              loginNetworkError
                ? 'auth-form__input-error auth-form__input-error_active'
                : 'auth-form__input-error'
            }
          >
            {loginNetworkError}
          </span>
        </label>
        <button type="submit" className="auth-form__submit" disabled={!isValid}>
          Войти
        </button>
        <p className="auth-form__sentence">
          Ещё не зарегистрированы?{' '}
          <Link className="auth-form__link" to="/sign-up">
            Регистрация
          </Link>
        </p>
      </form>
    </div >


  )
}
