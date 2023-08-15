import './landing.css'
import { Link } from "react-router-dom";
function Landing() {
    return (
      <div className='Background' >
        <h1 className='h1Land'>Bienvenido a perrolandia</h1>
        
        <div className='EnterDiv'>
          <p className='pLand'>En esta pagina encontraras todo tipo de informacion sobre perros</p> 
          <Link className='linkLanding' to="/home">Ingresar</Link>
        </div>
      </div>
      
    );
  }
  
  export default Landing;
  