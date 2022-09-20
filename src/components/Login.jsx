import '../styles/Login.css';
import app from '../base';
import firebase from '../base';
import Cookies from 'cookies';
import { CookiesProvider, useCookies } from 'react-cookie';
import axios from 'axios';

function Registro(){
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  const [cookies, setCookies] = useCookies(['name', 'email', 'logo'])

  function Login(e){
    e.preventDefault()
    auth.signInWithPopup(provider).catch(alert).then((user)=>{
      setCookies('name', user.user.displayName);
      setCookies('email', user.user.email)
      setCookies('logo', user.user.photoURL)
      axios.post("https://eco-backend.vercel.app/api/usuarios",{
        "userName": user.user.displayName,
        "email": user.user.email,
        "logo": user.user.photoURL
      })
    })
  }
  return(
      <div class="register">
      <form class="form-reg">
          <div class="form-group col mb-4">
            <label for="staticEmail" class="col-sm-2 col-form-label text-light"><b>Email</b></label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com"/>
            </div>
          </div>
          <div class="form-group col">
            <label for="inputPassword" class="col-sm-2 col-form-label text-light"><b>Password</b></label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
            </div>
          </div>
          <div className="d-flex m-4 btns">
              <button class="btn btn-primary" id="btnreg">Registrar</button>
              <button class="btn btn-dark" onClick={Login} id="btnlog" style={{marginLeft: "5%"}}>Iniciar sesion</button>
          </div>
          <div className='creden mt-2 text-center'>
          <span className='text-sencodary '>©Ecoverso 2022</span>
          </div>
      </form>
  </div>
  )
}
export default Registro;