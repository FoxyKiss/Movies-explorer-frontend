import AuthForm from '../AuthForm/AuthForm.jsx';


const formProps = {
  path: '/sign-in',
  formId: 'signUpForm',
  buttonText: 'Зарегистрироваться',
  title: 'Добро пожаловать!',
  sentence: 'Уже зарегистрированы?',
  linkText: 'Войти',
  indentClass: 'register-indent'
}
export default function Register() {
  return (
    <AuthForm formProps={formProps} />
  );
}