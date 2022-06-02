import AuthForm from '../AuthForm/AuthForm.jsx';


const formProps = {
  formId: 'signUpForm',
  buttonText: 'Зарегистрироваться',
  title: 'Добро пожаловать!',
  sentence: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  indentClass: 'register-indent'
}
export default function Login() {
  return (
    <AuthForm formProps={formProps} />
  );
}