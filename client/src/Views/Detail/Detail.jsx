import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';


import "./Detail.css"
import axios from "axios";
export default  function Detail(props) {

    const {id} = useParams();
    const [detail, setDetail]  = useState({})
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get("http://localhost:3001/dogs/filter/getid/" + id);
            setDetail(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, [id]);
   
    return(
      <div className="backgrounD">  
      
     <div className="divD">
      <div className="divImagenD">
        <img className="imagenD" src={detail.Imagen} alt={detail.Nombre} />
        </div>
        <div className="divData">   
        <h1 className="h1D">{"Nombre: "+detail.Nombre}</h1>
        <h2 className="h1D">{"Altura: "+detail.Altura}</h2>
        <h2 className="h1D">{"Peso: "+detail.Peso}</h2>
        <h2 className="h1D">{"Temperamentos: "+detail.Temperamentos}</h2>
        <h2 className="h1D">{"Años de vida: "+detail.Años_de_vida}</h2>
        <h2 className="h1D">{"ID: "+detail.ID}</h2>
        </div>
     </div>
     </div>
    )

}