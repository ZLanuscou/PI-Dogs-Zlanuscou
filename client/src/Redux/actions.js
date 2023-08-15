import axios from "axios"

export const GET_ALLDOGS = "GET_ALLDOGS"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const ORDER_ORIGIN = "ORDER_ORIGIN"
export const ORDER ="ORDER"
export const ORDER_TEMPERAMENT ="ORDER_TEMPERAMENT"
export const GET_NAME = "GET_NAME"
export const POST = "POST"

export const GetAllDogs = ()=>{
    return async(dispatch)=>{
    const response = await axios.get("http://localhost:3001/dogs")
    dispatch({
     type: GET_ALLDOGS,
     payload: response.data   
    }) 
    }
}
export const GetTemperaments = ()=>{
    return async(dispatch)=>{
    const response = await axios.get("http://localhost:3001/dogs/temperaments")
    dispatch({
     type: GET_TEMPERAMENTS,
     payload: response.data   
    }) 
    }
}
export const GetName = (Name)=>{
    
    return async(dispatch)=>{
        
    const response = await axios.get("http://localhost:3001/dogs/name/filter?name="+Name)
    dispatch({
     type: GET_NAME,
     payload: response.data   
    }) 
    }
}
export const PostDog = (dog)=>{
    return async(dispatch)=>{
    const response = await axios.post("http://localhost:3001/dogs/post", dog)
    dispatch({
     type: POST,
     payload: response.data   
    }) 
    }
}

export const OrderOrigin = (origin)=>{
return{
    type: ORDER_ORIGIN,
    payload: origin
}
}
export const Order = (param)=>{
    return{
        type: ORDER,
        payload: param
    }
    }
    export const OrderTemperament = (temperament)=>{
        return{
            type: ORDER_TEMPERAMENT,
            payload: temperament
        }
        }
        
    
    
