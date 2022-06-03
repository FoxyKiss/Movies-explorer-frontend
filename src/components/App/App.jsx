import React from 'react'
import { Route, Switch } from 'react-router-dom';

//? Импорты компонентов
import Main from '../Main/Main.jsx';
import Register from '../Register/Register.jsx'
import Login from '../Login/Login.jsx'

function App() {
  //? State переменная статуса авторизации
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <div className="page">
      <Switch>
        <Route exact path="/"><Main isLogin={loggedIn} /></Route>
        <Route path="/sign-in"><Login /></Route>
        <Route path="/sign-up"><Register /></Route>
      </Switch >
    </div>
  )
}

export default App;
