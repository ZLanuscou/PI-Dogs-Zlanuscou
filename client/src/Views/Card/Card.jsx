import { Link } from "react-router-dom";
import "./card.css"
export default function Card({dog}) {
    
    return(
        <div className="card" >
        <Link className="linkStyle" to={`/detail/${dog.ID}` }> 
      <img src={dog.Imagen} alt={dog.Nombre} className="image"/>
      <h1>{dog.Nombre}</h1>
      <p>{dog.Temperamentos}</p>
      <p>{dog.Peso}</p>
       </Link>
       </div> 
    )
}