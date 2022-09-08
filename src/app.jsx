import { useState } from 'preact/hooks'
import Banner from './components/Banner';
import Router from 'preact-router';
import Registro from './components/Login';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Park from './components/Park';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
    <Navbar/>
    <Router>
      <Banner path="/"/>
      <Registro path="/registro" />
      <Information path="/Informacion" />
      <Park path="/parques" />
    </Router>
    </div>
    </>
  )
}
