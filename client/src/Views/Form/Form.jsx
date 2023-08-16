import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostDog, GetTemperaments } from "../../Redux/actions";
import "./Form.css"
import Validate from "./validate";
export default function Form(props) {
  const navigate = useNavigate()
    const [dogData, setDogData] = useState({Nombre:"", Altura: "", Peso: "", Años_de_vida:"", Temperamentos:[], Imagen:""})
    const [error, setError] = useState({});
    const [messageSubmit, setMessageSubmit] = useState("")
    const tempState = useSelector((state)=> state.Temperaments)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetTemperaments())
      },[dispatch])
    function handleChange(event) {
      event.preventDefault();
      setMessageSubmit("")
      let updatedData;
      if (event.target.name === "Temperamentos") {
        updatedData = {
          ...dogData,
          Temperamentos: [...dogData.Temperamentos, event.target.value]
        };
      } else {
        updatedData = {
          ...dogData,
          [event.target.name]: event.target.value
        };
      }

        setDogData(updatedData);
        setError(Validate({ ...dogData, [event.target.name]: event.target.value  }))
        console.log("array temp", dogData.Temperamentos)
    }
    
    const handleSumbit = async (event) => {
     event.preventDefault()
     try{
      if(Object.keys(error).length === 0){ 
        
        const temperamentosString = dogData.Temperamentos.join(", ");
        const dogDataToSend = { ...dogData, Temperamentos: temperamentosString };
       console.log("temperamentos form", temperamentosString)
       console.log(" dog form", dogDataToSend)
          if(dogDataToSend){
            await dispatch(PostDog(dogDataToSend));
          
       setDogData({Nombre:"", Altura: "", Peso: "", Años_de_vida:"", Temperamentos:[], Imagen: ""})

        setMessageSubmit("Perro creado exitosamente!")
      } }else{
         return alert("Escribe bien los datos antes de enviar!")
       } }catch{
        setMessageSubmit("Perro ya existente!")
       }
      
    }
    return(
   <div className="divForm">
    {messageSubmit && <h1 style={{ color: 'white' }}>{messageSubmit}</h1>}
    <div className="divEspacio">  
  <form onSubmit={handleSumbit}>
  <label className="labelForm">Nombre</label>
<input className="input"onChange={handleChange} type = "text" placeholder="Nombre" 
value = {dogData.Nombre}
name="Nombre"/>

<p className="p">{error.Nombre && error.Nombre }</p>

<label className="labelForm">Altura</label>
<input className="input"onChange={handleChange} type = "text" placeholder="Altura" 
value = {dogData.Altura}
name="Altura"/>

<p className="p">{error.Altura && error.Altura }</p>

<label className="labelForm">Peso</label>
<input className="input" onChange={handleChange} type = "text" placeholder="Peso" 
value = {dogData.Peso}
name="Peso"/>

<p className="p">{error.Peso && error.Peso }</p>

<label className="labelForm">Años de vida</label>
<input className="input"onChange={handleChange} type = "text" placeholder="Años de vida" 
value = {dogData.Años_de_vida}
name="Años_de_vida"/>

<p className="p">{error.Años_de_vida && error.Años_de_vida }</p>
<label className="labelForm">URL imagen</label>
<input className="input"onChange={handleChange} type = "text" placeholder="Imagen" 
value = {dogData.Imagen}
name="Imagen"/>
<label className="labelForm">Temperamentos</label>
<select className="selectForm"name="Temperamentos" multiple value={dogData.Temperamentos} onChange={handleChange}>
{tempState.map((t) => (
    <option key={t.Nombre} value={t.Nombre}>{t.Nombre}</option>
    ))}
</select>
<div className="divBuscarForm">
<input className="inputBuscarForm" type="submit" />
</div>
  
  </form>
  </div>
  
   </div>

   ) 
}