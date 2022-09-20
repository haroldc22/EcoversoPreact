import { useState } from 'preact/hooks'
import Banner from './components/Banner';
import Router from 'preact-router';
import Registro from './components/Login';
import NavBar from './components/Navbar';
import Information from './components/Information';
import Park from './components/Park';
import Nosotros from './components/Nosotros';
import facebook from "./img/facebook.png"
import instagram from "./img/instagram.png"
import github from "./img/github.png"
import Perfil from './components/Perfil';

export function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='main'>
    <NavBar/>
    <Router>
      <Banner path="/"/>
      <Registro path="/registro" />
      <Information path="/Informacion" />
      <Nosotros path="/nosotros" />
      <Park path="/parques" />
      <Perfil path="/perfil" />
    </Router>
    </div>
    <footer class="bg-dark">
        <div class="credenciales">
            <p class="text-light">
                <span className="ml-2">© 2022 Ecoverso </span>
                <span>Todos los derechos reservados</span>
            </p>
            <div class="names d-flex">
                <a id="nombres" className="card-text">Harold Castaño</a>
                <a id="nombres" className="card-text">• Mariana Jaramillo</a>
                <a id="nombres" className="card-text">• Henry Sepulveda</a>
                <a id="nombres" className="card-text">• Jhojan Espinosa</a>
                <a id="nombres" className="card-text">• Estefania Muñoz</a>
            </div>
            <div class="icons d-flex">
                <img src={facebook} width={30} height={30}/>
                <img src={instagram} width={30} height={30}/>
                <img src={github} width={30} height={30}/>
            </div>
        </div>
    </footer>
    </>
  )
}
