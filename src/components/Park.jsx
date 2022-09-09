import axios from 'axios'
import {useState} from  'react'
import '../styles/parks.css'

function Park(){
    const [data, setData] = useState([]);
    async function getData(){
        const data = await axios.get("https://eco-backend-h5q30bs61-ecoversoback.vercel.app/api/parques");
        setData(data.data);
    }
    getData()
    return(
        <div className="park container" style={{flexWrap: "wrap"}}>
            {
                data.map(e=>(
                  <div class="card bg-dark m-2 p-2 " style="height: 85vh">
                    <h5 class="text-card text-light">{e.name}</h5>
                    <img src={e.img} class="mt-2" style="height: 230px" />
                    <div class="mt-4">
                        <p class="text-light" style="overflow: auto; height: 100%">{e.description}</p>
                    </div>
                  </div>  
                ))
                
            }
        </div>
    )
}
export default Park;