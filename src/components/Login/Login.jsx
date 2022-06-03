import AuthForm from '../AuthForm/AuthForm.jsx';

const formProps = {
  path: '/sign-up',
  formId: 'signInForm',
  buttonText: 'Войти',
  title: 'Рады видеть!',
  sentence: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  indentClass: 'login-indent'
}
export default function Login() {
  return (
    <AuthForm formProps={formProps} />
  );
}