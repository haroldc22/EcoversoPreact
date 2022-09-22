import '../styles/Login.css';
import app from '../base';
import firebase from '../base';
import Cookies from 'cookies';
import { CookiesProvider, useCookies } from 'react-cookie';
import axios from 'axios';
import {useState} from 'react'
import {Credentials, App} from 'realm-web'
import logo from '../img/usuario-perfil.png'
import google from '../img/google.png'
import { useAuth0 } from "@auth0/auth0-react";

function Registro(){
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  const [cookies, setCookies] = useCookies(['name', 'email', 'logo'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(false)
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  function Login(e){
    e.preventDefault()
    loginWithRedirect()
    if(isAuthenticated)
      setCookies('name', user.name);
      setCookies('email', user.email);
      setCookies('logo', user.picture);
      axios.post("https://eco-backend.vercel.app/api/usuarios",{
        "userName": user.name,
        "email": user.email,
        "logo": user.picture
      })
  }
  function Email(e){
    e.preventDefault()
    if(!status){
      auth.signInWithEmailAndPassword(
        email,
        password
      ).then(user=>{
        console.log(user);
        setCookies('name', name);
        setCookies('email', user.user.email)
        setCookies('logo', logo)
        axios.post("https://eco-backend.vercel.app/api/usuarios",{
          "userName": name,
          "email": user.user.email,
          "logo": logo
        })
        setEmail('')
        setPassword('')
      }).catch(err=>{
        console.log(err);
        
      })
      
    }
    else{
      auth.createUserWithEmailAndPassword(
        email,
        password
      ).then(user=>{
        console.log(user);
        setCookies('name', name);
        setCookies('email', user.user.email)
        setCookies('logo', logo)
        axios.post("https://eco-backend.vercel.app/api/usuarios",{
          "userName": name,
          "email": user.user.email,
          "logo": logo
        })
        setEmail('')
        setPassword('')
      }).catch(err=>{
        console.log(err);
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
          <div class="form-group col mb-4">
            <label for="staticEmail" class="col-sm-2 col-form-label text-light"><b>Email</b></label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)}/>
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
              <a href='#' onClick={(e)=>setStatus(!status)}>{!status ? "aun no tienes cuenta?" : "inicia sesion"}</a>
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