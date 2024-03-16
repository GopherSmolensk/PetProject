import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <div className="navigation">

      <NavLink className="navigation__item" to='/Main'>
        <h1 className="navigation__title">На главную страницу</h1>
      </NavLink>

      <NavLink className="navigation__item" to='/Cinema'>
        <h1 className="navigation__title">Кинотеатр</h1>
      </NavLink>

      <NavLink className="navigation__item" to='/Quiz'>
        <h1 className="navigation__title">Тест</h1>
      </NavLink>

    </div>
  )

}