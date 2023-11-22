

import { NavLink, NavLinkProps  } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>Aplicación de Gestión de Libros</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className={(isActive) => isActive ? "link" : "link active"}  >
            Lista de Libros
          </NavLink>
          <NavLink to="/add" className={(isActive) => isActive ? "link" : "link active"}>
            Añade Libro
          </NavLink>
        </div>
      </header>
    )
  }
  
  export default Header;