// Sesión del contenido de la página
import '../styles/banner.css';
import mountains_front from '../img/mountains_front.png'
import descubre_1 from '../img/descubre1.png'
import descubre_2 from '../img/descubre2.png'
import descubre_3 from '../img/descubre3.png'
import avatarwoman from '../img/avatarwoman.png'


function Banner(){
    return(
        <>
        <div class="contenido"> {/*todo el contenido*/}
            {/* introducción con imagen y titulo, boton tutorial */}
            <section>
                <div className='title w-10' style={{"left": "38%", top:"300px"}}>
                    <h2 id='text' className='mt-4'>Ecoverso</h2>
                    <button id="btn" className='mt-5 btn' style={{position: "relative", left: "42%"}}>Tutorial</button>
                </div>
                <img src={mountains_front} id="m_front" />
            </section>
            {/* FIN de la introducción con imagen y titulo, botón tutorial */}
            
            {/* texto informativo, imagen avatar, carrusel de información */}
            <div class="main d-flex">
                <p class="card-text" style={{fontSize: "20px", padding: "70px 0"}}>
                    ¡Hola explorador! Bienvenido a Ecoverso, Una galaxia donde encontrarás planetas y estrellas los cuales te proporcionarán aventuras y nuevos conocimientos, adéntrate en un viaje por los parques y áreas protegidas de la galaxia, la región Antioquia.
                </p>
                <img src={avatarwoman} style={{width: "20%"}} alt="" />
            </div>
            {/* FIN texto informativo, imagen avatar, carrusel de información */}

            {/* Sección descubre, juegos y encuestas */}
            <p style={{fontSize: "30px", padding: "70px 0", textAlign:"center"}}>Descubre</p>
            <section class="tarjetas d-flex justify-content-center">
                <section className='d-flex m-4 bg-dark p-2' style={{flexDirection: "column"}}>
                    <img src={descubre_1} className="mb-2" />
                    <div class="texto tarjetas d-flex justify-content-center" style={{flexDirection: "column"}}>
                        <p style={{textAlign: "center"}}>juego</p>
                        <a style={{textAlign: "center"}} href="">Ver detalles</a>
                    </div>
                </section>
                <section className='d-flex m-4 bg-dark p-2' style={{flexDirection: "column"}}>
                    <img src={descubre_1} className="mb-2" />
                    <div class="texto tarjetas d-flex justify-content-center" style={{flexDirection: "column"}}>
                        <p style={{textAlign: "center"}}>juego</p>
                        <a style={{textAlign: "center"}} href="">Ver detalles</a>
                    </div>
                </section>
                <section className='d-flex m-4 bg-dark p-2' style={{flexDirection: "column"}}>
                    <img src={descubre_1} className="mb-2" />
                    <div class="texto tarjetas d-flex justify-content-center" style={{flexDirection: "column"}}>
                        <p style={{textAlign: "center"}}>juego</p>
                        <a style={{textAlign: "center"}} href="">Ver detalles</a>
                    </div>
                </section>
            </section>
            {/* Sección descubre, juegos y encuestas */}
        </div>
    </>

    )

}

export default Banner;