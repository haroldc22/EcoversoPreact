import '../styles/Login.css';
import app from '../base';
import firebase from 'firebase';
import Cookies from 'cookies';
import { CookiesProvider, useCookies } from 'react-cookie';
import axios from 'axios';
import {useState} from 'react'
import {Credentials, App} from 'realm-web'
import logo from '../img/usuario-perfil.png'
import google from '../img/google.png'
import { useAuth0 } from "@auth0/auth0-react";
import facebooklog from '../img/facebook.png'

function Registro(){
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  const facebook = new firebase.auth.FacebookAuthProvider();
  const [cookies, setCookies] = useCookies(['name', 'password', 'logo', "email"]);
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(false)
  const { loginWithRedirect } = useAuth0();
  
  function Login(e){
    e.preventDefault()
    
    auth.signInWithPopup(provider).then((user)=>{
      console.log(user);
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
  async function Email(e){
    e.preventDefault()
    if(status){
        setCookies('name', name);
        setCookies('password', password)
        setCookies('logo', logo)
        axios.post("https://eco-backend.vercel.app/api/usuarios",{
          "userName": name,
          "logo": logo,
          "password": password
        })
    }
    else{
      alert(name)
      const res = (await axios.get('https://eco-backend.vercel.app/api/usuarios')).data;
      res.map(e=>{
        console.log(e);
        if(e.name == name && e.password == password){
        setCookies('name', name);
        setCookies('password', password)
        setCookies('logo', logo)
        }
      })
    }
  }
  return(
      <div class="register d-flex justify-content-center">
      <form class="form-reg">
        <div className="form-group col mb-4">
          <label for="username" class="col-sm-2 col-form-label text-light">username</label>
          <div class="col-sm-10">
              <input type="text" class="form-control" id="username" placeholder="user123" onChange={(e)=>setName(e.target.value)}/>
            </div>
        </div>
          <div class="form-group col">
            <label for="inputPassword" class="col-sm-2 col-form-label text-light"><b>Password</b></label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="d-flex m-4 btns">
              <button class="btn btn-dark" onClick={Email} id="btnlog" style={{margin: "0 7% 0 8%"}}>{!status ? "Iniciar sesion" : "Registrar"}</button>
              <a href='#' onClick={(e)=>setStatus(!status)}>{!status ? "Aún no tienes cuenta?" : "inicia sesion"}</a>
          </div>
          <button onClick={Login} style={{width: "80%", marginLeft: "10%", borderRadius: "8px"}}><img src={google} style={{width: "7%"}}/></button>
          <div className='creden mt-2 text-center'>
          <span className='text-sencodary '>©Ecoverso 2022</span>
          </div>
      </form>
  </div>
  )
}
export default Registro;