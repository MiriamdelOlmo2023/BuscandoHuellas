import './App.css';
import Animales from './SliderAnimales.jsx';
import Navbar from './navbar.jsx';
import QuienesSomos from './quienesSomos.jsx'; 
import Historia from './Historia.jsx'; 
import Contacto from './Contacto.jsx'; 
import PieDePagina from './Footer.jsx';
import Menu from './Menu.jsx';
import Carrousel from './Carrousel.jsx';
import Refugio from './Refugio.jsx';
import Intro from './intro.jsx';
import {useState, useEffect} from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import Zoom from 'react-reveal/Zoom';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])

  return (
    
    <div className="">
      {
        loading?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <PacmanLoader color="#103142" />
        </div>
        :
        <div>
          
          <header className="App-header">
            <link rel="icon" href="media/logo.png"/>
            <Navbar/>
            <Menu/>
          </header>
          <div id="bodyDiv">
            <Zoom>
              <Intro/>
              <div id="carrousel">
                <Carrousel/>
              </div>
              <div id="menu1">
                <QuienesSomos/>
              </div>
              <div id="menu2">
                <Historia/>
              </div>
              <div id="menu3">
                <Contacto/>
              </div>
              <div id="menu4">
                <Animales/>
              </div>  
              <div id="menu5">
                <Refugio/>
              </div>
            </Zoom>
          </div> 
          <PieDePagina/> 
        </div>
      }
    </div>
  );
}

export default App;
