import axios from 'axios'
import {useState} from  'react'
import '../styles/parks.css'
import Carousel from 'react-bootstrap/Carousel';

function Park(){
    var img = ['https://imgs.search.brave.com/lcKh72fBxLXISRJrffJY9_HFaXA4ZAXFnreSO4qRhto/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/cWttSG9Cd2dqeHBQ/VFY5OW9kM1FnSGFF/SyZwaWQ9QXBp',
     'https://imgs.search.brave.com/r0XVk1b0D13M0VY0BLmpO_QNPoQyd15BB9PWc3Qpoa0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/NFZQV2otN1VHS05m/VGRic0dBd21RSGFF/OCZwaWQ9QXBp'];
    const [data, setData] = useState([]);
    async function getData(){
        const data = await axios.get("https://eco-backend-h5q30bs61-ecoversoback.vercel.app/api/parques");
        setData(data.data);
    }
    getData();
    return(
        <Carousel>
            {
                data.map(e=>(
                    <Carousel.Item style={{width: "80%", margin: "0 10%", height: "90vh"}}>
                        <img
                        className="d-block w-100"
                        src={e.img}
                        alt="Second slide"
                        style={{"margin": "2% 0", height: "95%"}}
                    />
            
                    <Carousel.Caption className='p-2' style={{background: "#FFFFFF90"}}>
                        <h3 className='text-success mb-2'>{e.name}</h3>
                        <p className='text-dark'>{e.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item> 
                )) 
            }  
      </Carousel>
    )
}
export default Park;