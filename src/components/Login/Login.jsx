import AuthForm from '../AuthForm/AuthForm.jsx';

export default function Login() {
  const formProps = {
    path: '/sign-up',
    formId: 'signInForm',
    buttonText: 'Войти',
    title: 'Рады видеть!',
    sentence: 'Ещё не зарегистрированы?',
    linkText: 'Регистрация',
    indentClass: 'login-indent',
    nameField: false,
  }

  return (
    <AuthForm formProps={formProps} />
  );
}