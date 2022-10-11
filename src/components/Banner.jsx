// Sesión del contenido de la página
import '../styles/banner.css';
import mountains_front from '../img/mountains_front.png'
import descubre_1 from '../img/descubre1.png'
import descubre_2 from '../img/descubre2.png'
import descubre_3 from '../img/descubre3.png'


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
            <div class="main">
                <p class="card-text" style={{fontSize: "20px", padding: "70px 0"}}>
                    ¡Hola explorador! Bienvenido a Ecoverso, Una galaxia donde encontrarás planetas y estrellas los cuales te proporcionarán aventuras y nuevos conocimientos, adéntrate en un viaje por los parques y áreas protegidas de la galaxia, la región Antioquia.
                </p>
            </div>
            {/* FIN texto informativo, imagen avatar, carrusel de información */}

            {/* Sección descubre, juegos y encuestas */}
            <p style={{fontSize: "30px", padding: "70px 0", textAlign:"center"}}>Descubre</p>
            <section class="tarjetas">
                <section>
                    <img src={descubre_1}/>
                    <div class="texto tarjetas">
                        <p>juego</p>
                        <a href="">Ver detalles</a>
                    </div>
                </section>

                <section>
                    <img src={descubre_2}/>
                </section>
                <section>
                    <img src={descubre_3}/>
                </section>
            </section>
            {/* Sección descubre, juegos y encuestas */}
        </div>
    </>

    )

}

export default Banner;