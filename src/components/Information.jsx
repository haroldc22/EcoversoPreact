import '../styles/info.css'
import colombia from '../img/colombia.png'
import mapaAntioquia from '../img/mapaAntioquia.jpg';
import agua from '../img/agua.jpg';

function Information(){
    return(
        <div>
            <h1>BIODIVERSIDAD DE COLOMBIA</h1>
            <p>
                Colombia es uno de los países más <strong><em>biodiversos del mundo</em></strong>, por ello es necesario cuidar de los 
                ecosistemas que conforman esta riqueza nacional, así como ayudar a que los <strong><em>recursos naturales</em></strong> se 
                mantengan en balance ante la presencia de factores alternos como lo son el contacto humano. 
            </p>
            <img class="class1" src={colombia} title="biodiversidad"/>
            <p>
                Tenemos la visión de que Colombia tiene su propio <strong><em>universo ecológico</em></strong>, 
                por ello el diseño de nuestra app Ecoverso será inspirada en el universo, donde las <strong><em>regiones de Antioquia serán galaxias y las 
                zonas ecológicas planetas y estrellas</em></strong>, haciendo consciente al usuario de que es un explorador de maravillas 
                que creíamos inexistentes por desconocimiento.
            </p>
            <img class="class1" src={mapaAntioquia} title="regiones de antioquia" />
            <p>
                Los resultados obtenidos servirán para <strong><em>manejar el agua de manera más adecuada</em></strong>, evitando consecuencias
                nocivas en los consumidores y encontrando métodos más convenientes para su <strong><em>tratamiento y purificación</em></strong>
                como una manera efectiva de prevenir dolencias en la población, sobre todo la <strong><em>infantil</em></strong>, como la más 
                vulnerable ante la baja potabilidad del líquido. Es así como la elevada presencia de <strong><em>hierro y de 
                    sulfatos</em></strong> pueden originar en niños <strong><em>alergias y diarreas</em></strong>.
            </p>  
            <img class="class1" src={agua} title="como manejar el agua"/>
      </div>
    )
}
export default Information;