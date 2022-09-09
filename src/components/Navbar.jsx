import logo from '../img/0001.png'
import '../styles/navBar.css';

function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        <a href="/"><img src={logo} width={80} height={80} className="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/registro" class="nav-link" aria-current="page">Registro</a>  
              </li>
              <li class="nav-item">
                <a href="/Informacion" class="nav-link">Informacion</a>
              </li>
              <li class="nav-item">
                <a href="/nosotros" class="nav-link">Nosotros</a>
              </li>
              <li>
                <a href="/parques" class="nav-link">Parques</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className='login'></div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;