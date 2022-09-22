import axios from 'axios';
import react, {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import '../styles/perfil.css'
import {GrFormView} from 'react-icons/gr'
import {MdReviews} from 'react-icons/md'
import {CgGames} from 'react-icons/cg'
import empty from '../img/empty.png'

function Perfil(){
    var [data, setData] = useState([])
    const [cookie, setCookies] = useCookies(['name', 'email', 'logo'])
    useEffect(async()=>{
        await axios.get("https://eco-backend.vercel.app/api/usuarios").then(res=>{
            const fill = res.data.filter(e=>{
                if(e.userName == cookie.name)
                  return e
            })
            setData(fill[0])
        });
    })
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
                            <h3 className='text-white text-center'>{data.follows}</h3>
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
                    <div className='d-flex' style={{cursor: "pointer"}}><GrFormView /><h5 style={{marginLeft: "10px"}}>publicar</h5></div>
                    <div className='d-flex' style={{cursor: "pointer"}}><MdReviews/><h5 style={{marginLeft: "10px"}}>reseñas</h5></div>
                    <div className="d-flex" style={{cursor: "pointer"}}><CgGames /><h5 style={{marginLeft: "10px"}}>juegos</h5></div>
                </section>
                <section className={data.posts == null ? 'd-flex justify-content-center' : 'd-grid'} style={{background: "rgb(0 72 98)", padding: "90px", gridTemplateColumns: "repeat(3, 1fr)"}}>
                    {
                        data.posts == null ? 
                            <img src={empty} style={{"width": "20%"}} />:
                            data.posts.map(e=>(
                                <div>
                                    <img style={{width: "80%"}} src={e} />
                                </div>
                            ))
                    }
                </section>
            </main>
        </div>
    )
}
export default Perfil;