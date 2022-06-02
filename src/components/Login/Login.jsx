import AuthForm from '../AuthForm/AuthForm.jsx';

const formProps = {
  path: '/sign-in',
  formId: 'signInForm',
  buttonText: 'Войти',
  title: 'Рады видеть!',
  sentence: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  indentClass: 'login-indent'
}
export default function Register() {
  return (
    <AuthForm formProps={formProps} />
  );
}