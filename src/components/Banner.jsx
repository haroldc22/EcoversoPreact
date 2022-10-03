import '../styles/banner.css';
import {moon} from '../img/moon.png'
import {mountains} from '../img/mountains_behind.png'
import {mountains_front} from '../img/mountains_front.png'
import {stars} from '../img/stars.png'


function Banner(){
    return(
        <>
        <div class="container-fluid">
        <div class="title" style={{display: "flex", justifyContent: "center"}}>
            <h2 class="text-light" style={{display: "inline"}}>Bienvenido a Ecoverso</h2>
        </div>
        <div class="contenido">
            <section>
                <img src={moon} id="moon"/>
                <img src={mountains} id="mountains" />
                <img src={mountains_front} id="m_front" />
                <img src={stars} id="stars" />
            </section>
        </div>
        <iframe src="https://storymaps.arcgis.com/stories/c0f275e44de4460fbce3a66e9b1e2a37" className="mt-5 mb-5 iframe_mapa" width="100%" height="700px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
    </div>
    </>

    )

}

export default Banner;