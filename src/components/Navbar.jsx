import logo from '../img/logo.jfif'
import '../styles/navBar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CookiesProvider, useCookies } from 'react-cookie';
import user from '../img/usuario-perfil.png'
import { NavLink } from 'react-bootstrap';
import { Link } from 'preact-router';


function NavBar(){
  const [cookies, setCookies] = useCookies(['name', 'email', 'logo'])

    return(
      <header>
        <Navbar bg="dark" expand="lg">
        <Container fluid>
        <a href="/"><img src={logo} width={80} height={80} className="logo" /></a>
        <div className='d-flex' style={{justifyContent: "end"}}>
          <Navbar.Toggle aria-controls="navbarScroll"/><Link style={{marginLeft: "15px", width: "8vh"}} href={cookies.name != null ? "/perfil" : "/registro"} ><img src={cookies.name != null ? cookies.logo : user}
              style={{borderRadius: "100%", cursor: "pointer"}} id="logo"
              /></Link>
        </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="/registro">Registro</Nav.Link>
              <Nav.Link href="/Informacion">Informacion</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link href="/parques">
                Parques
              </Nav.Link>
            </Nav>
            <div className='logouser' style={{width: "10%", height: "10%"}}>
            </div>
            <Link href={cookies.name != null ? "/perfil" : "/registro"} style={{width: "5%", marginRight: "15px"}} ><img src={cookies.name != null ? cookies.logo : user}
              style={{borderRadius: "100%", width: "100%", cursor: "pointer"}} id="logomain"
            /></Link>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
    </header>
    )
}

export default NavBar;