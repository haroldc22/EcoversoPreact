import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import github from "../img/github.png"
import '../styles/banner.css';

function Banner(){
    return(
        <>
        <div class="container-fluid">
        <div class="title" style={{display: "flex", justifyContent: "center"}}>
            <h2 class="text-light" style={{display: "inline"}}>Bienvenido a Ecoverso</h2>
        </div>
        <div class="contenido">
            <div class="main">
                <h2 class="card-text" style={{textAlign: "center"}}>Ecoverso</h2>
                <p class="card-text text-dark" style={{fontSize: "20px", padding: "70px 0"}}>
                    Tenemos la visión de que Colombia tiene un sin fin de diversidad ecológica, un universo que es necesario reconocer y explorar.
                    ¡Hola explorador, te damos la bienvenida a Ecoverso! Podrás navegar a través de Antioquía, una galaxia donde encontrarás planetas y estrellas los cuales te proporcionarán diversas aventuras y nuevos conocimientos, adéntrate en un viaje por los parques y áreas protegidas de la región Antioquia, Colombia.
                </p>
            </div>
        </div>
        <iframe src="https://storymaps.arcgis.com/stories/c0f275e44de4460fbce3a66e9b1e2a37" className="mt-5 mb-5 iframe_mapa" width="100%" height="700px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
        <footer class="bg-dark">
        <div class="credenciales">
            <p class="text-light">
                <span>© 2022 Ecoverso</span>
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
    </div>
    
    </>

    )

}

export default Banner;