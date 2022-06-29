import React, { useContext } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import formValidationHook from '../../utils/hooks/formValidationHook'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

export default function Profile({
  updProfileNetworkError,
  handleEditProfile,
  handleExitAccount,
  isAuth,
  isSuccessSubmit,
}) {
  const [isUpdate, setIsUpdate] = React.useState(false)
  const [isInputDisabled, setIsInputDisabled] = React.useState(false)
  const currentUser = useContext(CurrentUserContext)
  const nameRef = React.useRef('')
  const emailRef = React.useRef('')

  const { errors, handleChange, isValid } = formValidationHook({
    name: nameRef.current.value,
    email: emailRef.current.value,
  })

  React.useEffect(() => {
    if (nameRef.current.value === currentUser.name && emailRef.current.value === currentUser.email) {
      setIsUpdate(false)
    } else {
      setIsUpdate(true)
    }
  }, [nameRef.current.value, emailRef.current.value, currentUser.name, currentUser.email])

  function onFormSumbit(evt) {
    setIsInputDisabled(true)
    evt.preventDefault()
    if (isValid) {
      const name = nameRef.current.value
      const email = emailRef.current.value
      handleEditProfile({ name, email })
      evt.target.reset()
      setIsInputDisabled(false)
    }
    setIsInputDisabled(false)
  }

  return (
    <>
      <Header isAuth={isAuth} />
      <section className="profile">
        <form className="profile__form" name="edit" onSubmit={onFormSumbit} noValidate>
          <h1 className="profile__title">{`Привет, ${currentUser?.name}`}</h1>
          <ul className="profile__info">
            <li className="profile__form-input-item">
              <p className="profile__info-text profile-name">Имя</p>
              <input
                type="text"
                name="profileName"
                className={
                  errors.profileName ? 'profile__form-input profile__form-input_type_error' : 'profile__form-input'
                }
                placeholder="Ваше имя"
                minLength="2"
                maxLength="18"
                values={nameRef.current.value}
                ref={nameRef}
                onChange={handleChange}
                required
                disabled={isInputDisabled}
                defaultValue={currentUser.name}
              />
            </li>
            <li className="profile__form-input-item">
              <p className="profile__info-text profile-email">Email</p>
              <input
                type="email"
                name="profileEmail"
                className={
                  errors.profileEmail ? 'profile__form-input profile__form-input_type_error' : 'profile__form-input'
                }
                placeholder="Ваш e-mail"
                values={emailRef.current.value}
                onChange={handleChange}
                ref={emailRef}
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
                disabled={isInputDisabled}
                defaultValue={currentUser.email}
              />
            </li>
          </ul>
          <div className="profile__buttons">
            {errors.profileName && <span className="profile__error-field">{errors.profileName}</span>}
            {errors.profileEmail && <span className="profile__error-field">{errors.profileEmail}</span>}
            {isSuccessSubmit && <span className="profile__success-field">Ваши данные успешно изменены</span>}
            {updProfileNetworkError && <span className="profile__error-field">{updProfileNetworkError}</span>}
            <button type="submit" className={` ${!isValid || !isUpdate ? 'button-disable' : 'profile__edit-button'}`} disabled={!isValid || !isUpdate}>
              Редактировать
            </button>
            <button type="button" className="profile__logout-button" onClick={handleExitAccount}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
