import { useHistory } from 'react-router-dom'
import './NotFound.css';

export default function NotFound() {
  let history = useHistory()
  function backHandler() {
    history.goBack()
  }
  return (
    <div className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={backHandler} className="not-found__back-button">Назад</button>
    </div>
  )
}