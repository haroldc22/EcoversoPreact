import '../styles/Login.css';

function Registro(){
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
               <button class="btn btn-dark" id="btnlog" style={{marginLeft: "5%"}}>Iniciar sesion</button>
            </div>
           <div className='creden mt-2 text-center'>
            <span className='text-sencodary '>©Ecoverso 2022</span>
           </div>
        </form>
    </div>
    )
}
export default Registro;