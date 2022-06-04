import './SearchForm.css';

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-field">
          <input className="search__form-input" type="text" placeholder="Фильм" />
          <button className="search__form-button" type="submit"></button>
        </div>
        <label className="search-form__checkbox">
          <span className="search-form__checkbox-title">Короткометражки</span>
          <input type="checkbox" className="search-form__checkbox_input_hidden" />
          <span className="search-form__checkbox_input_visible" />
        </label>
      </form>
    </section>
  );
}