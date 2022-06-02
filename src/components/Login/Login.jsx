import AuthForm from '../AuthForm/AuthForm.jsx';

const formProps = {
  formId: 'signInForm',
  buttonText: 'Войти',
  title: 'Рады видеть!',
  sentence: 'Уже зарегистрированы?',
  linkText: 'Войти',
  indentClass: 'login-indent'
}
export default function Register() {
  return (
    <AuthForm formProps={formProps} />
  );
}