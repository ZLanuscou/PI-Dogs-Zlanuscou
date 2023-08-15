import { useSelector, useDispatch,  } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAllDogs, Order, OrderOrigin, OrderTemperament, GetTemperaments, GetName} from '../../Redux/actions';
import Cards from '../Cards/Cards';
import "./home.css"
function Home() {
  const navigate = useNavigate()
  const itemsPage = 8
  const dispatch = useDispatch()
  const allDogs = useSelector((state)=> state.Dogs)
  const tempState = useSelector((state)=> state.Temperaments)
  const [Name, setName] = useState("")
  const [Page, setPage] = useState(0)
  const [Dogs, setDogs] = useState(allDogs)
  const [error, setError] = useState(false)
  const startIndex = itemsPage * Page;
  const endIndex = startIndex + itemsPage;
  const [DogsPerPage, setDogsPerPage] = useState([])
  useEffect(()=>{
    dispatch(GetAllDogs())
  },[dispatch])
  useEffect(() => {
    setDogs(allDogs);
  }, [allDogs]);
  useEffect(()=>{
    setDogsPerPage(Dogs.slice(startIndex, endIndex)) 
  }, [Dogs, startIndex, endIndex])
  useEffect(()=>{
    dispatch(GetTemperaments())
  },[dispatch])
  
 const handleNext = ()=>{
 const TotalElements =  Dogs.length
 const nextPage = Page + 1
 if(endIndex >= TotalElements)return;
 
 setPage(nextPage)
 }
 const handlePrev = ()=>{
  const prevPage = Page - 1
  if(endIndex <= itemsPage)return;
  setPage(prevPage)
 }
const handleSearch = async(event)=>{
  try {
  const response = await dispatch(GetName(Name)) 
      setName("")
    setPage(0)
} catch (error) {
  console.error("error front: "+error);
  navigate("/error")
}
}

const handleChange = (e)=>{
  const name = e.target.value
  if(name){ 
    setName(name)
  }else{
   dispatch(GetAllDogs())
  }
}
const handleOrder = (e)=>{
dispatch(Order(e.target.value))
}
const handleOrderOrigin = (e)=>{
  dispatch(OrderOrigin(e.target.value))
  
  }
  const handleOrderTemperament = async(e)=>{

    dispatch(OrderTemperament(e.target.value))
    }
    return (
      <div className='premierContainer'>
        <div className='divBuscar'>  
        <input className="inpBuscar"onChange={handleChange}placeholder="Buscar raza..."/>
        <button className="buttonBuscar"onClick={handleSearch}>🔎</button>
        </div>
        <div className='menu'>
          <button className='menuBtn'>Filtros🠻</button>
          <div className='menuContent'>  
        <select className="select"onChange={handleOrder}>
        <option value={"A"}>A-Z</option>
        <option value={"D"}>Z-A</option>
        <option value={"P-A"}>Peso Ascendente</option>
        <option value={"P-D"}>Peso Descendente</option>
        </select>
        <select className="select"onChange={handleOrderOrigin}>
        <option value={"BD"}>Base de datos</option>
        <option value={"API"}>API</option>
        </select>
        <select className="select"onChange={handleOrderTemperament}>
        {tempState.map((t) => (
    <option key={t.Nombre} value={t.Nombre}>{t.Nombre}</option>
    ))}
        </select>
        </div> 
        </div>
        <Cards allDogs = {DogsPerPage}/>
        <div className='pageDiv'>
        <button className="button" onClick={handlePrev}>Prev</button>
        <h3>{"Pagina"+Page}</h3>
        <button className="button" onClick={handleNext}>Next</button>
        </div>
      </div>
      
    );
  }
  
  export default Home;