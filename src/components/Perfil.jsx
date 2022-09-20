import axios from 'axios';
import react, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import '../styles/perfil.css'
import {GrFormView} from 'react-icons/gr'
import {MdReviews} from 'react-icons/md'
import {CgGames} from 'react-icons/cg'

function Perfil(){
    let [data, setData] = useState([])
    const [cookie, setCookies] = useCookies(['name', 'email', 'logo'])
    useEffect(()=>{
        getData()
    })
    async function getData(){
        const res = await axios.get("https://eco-backend.vercel.app/api/usuarios");
        const filter = res.data.filter(e=>{
            if(e.userName == cookie.name){
                return e
            }
        })
        setData(filter[0])
    }
    return(
        <div className='perf'>
            <main>
                <section className='d-flex p-5'>
                    <img src={cookie.logo} style={{width: "16%", height: "16%", borderRadius: "100%", marginRight: "6%"}} />
                    <div className='info m-5'>
                    <h2 className='text-info'>{cookie.name}</h2>
                    <div className='items d-flex mt-5'>
                        <div className='column'>
                            {
                                <h3 className='text-white text-center'>{data.posts == null ? 0 : data.posts.length}</h3> 
                            }
                            <h4>Publicaciones</h4>
                        </div>
                        <div className='column'>
                            {
                                <h3 className='text-white text-center'>{data.followers}</h3>
                            }
                            <h4>Seguidores</h4>
                        </div>
                        <div className='column'>
                            {
                                <h3 className="text-white text-center">{data.follows}</h3>
                            }
                            <h4>Seguidos</h4>
                        </div>
                    </div> 
                    </div>
                </section>
                <section className='p-5 d-flex justify-content-center' style={{background: "rgb(0 72 88)"}}>
                    <div className='d-flex'><GrFormView /><h5 style={{marginLeft: "10px"}}>publicar</h5></div>
                    <div className='d-flex'><MdReviews/><h5 style={{marginLeft: "10px"}}>reseñas</h5></div>
                    <div className="d-flex"><CgGames /><h5 style={{marginLeft: "10px"}}>juegos</h5></div>
                </section>
            </main>
        </div>
    )
}
export default Perfil;