import '../styles/noss.css';
import harold from '../img/Harold.jpg'
import jhojan from '../img/jhojan.jpg'
import mariana from '../img/Mariana Ecoverso.png'
import estefania from '../img/Estefa.Ecoverso.jpg'
import henry from '../img/Henry Ecoverso.png'

let programadores = [
    {
        "name": "Harold Cataño Alvarez",
        "roll": "desarrollador",
        "info": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita fugit aliquid, similique laudantium quia aut hic numquam nulla, autem,consequatur voluptates blanditiis debitis illum sed quibusdam delectus reiciendis eos.",
        "img": {harold}
    },
    {
        "name": "Jhojan Espinosa Taborda",
        "roll": "programador",
        "info": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita fugit aliquid, similique laudantium quia aut hic numquam nulla, autem,consequatur voluptates blanditiis debitis illum sed quibusdam delectus reiciendis eos.",
        "img": {jhojan}
    },
    {
        "name": "Mariana Jaramillo Gomez",
        "roll": "desarrolladora",
        "info": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita fugit aliquid, similique laudantium quia aut hic numquam nulla, autem,consequatur voluptates blanditiis debitis illum sed quibusdam delectus reiciendis eos.",
        "img": {mariana}
    },
    {
        "name": "Estefania Muñoz Loaiza",
        "roll": "diseñadora & tester",
        "info": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita fugit aliquid, similique laudantium quia aut hic numquam nulla, autem,consequatur voluptates blanditiis debitis illum sed quibusdam delectus reiciendis eos",
        "img": {estefania}
    },
    {
        "name": "Henry Sepulveda",
        "roll": "tester",
        "info": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci expedita fugit aliquid, similique laudantium quia aut hic numquam nulla, autem,consequatur voluptates blanditiis debitis illum sed quibusdam delectus reiciendis eos.",
        "img": {henry}
    }
]

function Nosotros(){
    return(
        <div className="noss d-flex">
            {
                programadores.map(e=>(
                    <div class="card" style="width: 18rem;">
                        <img src={e.img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mb-2 text-center">{e.name}</h5>
                            <p class="card-text">{e.info}</p>
                            <p className="card-text text-primary text-center">{e.roll}</p>
                        </div>
                            <div class="cardatras" style="width: 18rem;">
                        <img src={e.img} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mb-2 text-center">{e.name}</h5>
                            <p class="card-text">{e.info}</p>
                            <p className="card-text text-primary text-center">{e.roll}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}
export default Nosotros;