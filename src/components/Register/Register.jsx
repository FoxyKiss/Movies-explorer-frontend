import AuthForm from '../AuthForm/AuthForm.jsx';


const formProps = {
  path: '/sign-up',
  formId: 'signUpForm',
  buttonText: 'Зарегистрироваться',
  title: 'Добро пожаловать!',
  sentence: 'Уже зарегистрированы?',
  linkText: 'Войти',
  indentClass: 'register-indent'
}
export default function Login() {
  return (
    <AuthForm formProps={formProps} />
  );
}