import AuthForm from '../AuthForm/AuthForm.jsx';

export default function Register() {
  const formProps = {
    path: '/sign-in',
    formId: 'signUpForm',
    buttonText: 'Зарегистрироваться',
    title: 'Добро пожаловать!',
    sentence: 'Уже зарегистрированы?',
    linkText: 'Войти',
    indentClass: 'register-indent',
    nameField: true,
  }

  return (
    <AuthForm formProps={formProps} />
  );
}