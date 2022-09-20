import '../styles/banner.css';

function Banner(){
    return(
        <>
        <div class="container-fluid">
        <div class="title" style={{display: "flex", justifyContent: "center"}}>
            <h2 class="text-light" style={{display: "inline"}}>Bienvenido a Ecoverso.</h2>
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
    </div>
    </>

    )

}

export default Banner;