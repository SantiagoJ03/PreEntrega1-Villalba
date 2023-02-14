

const Categorias = () => {
    return (
        
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-light">Categorias</button>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Adornos</a></li>
            <li><a className="dropdown-item" href="#">Baño</a></li>
            <li><a className="dropdown-item" href="#">Cocina</a></li>
          </ul>
        </li>
        
    );
}

export default Categorias;
