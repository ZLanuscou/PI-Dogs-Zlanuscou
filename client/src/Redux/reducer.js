import { GET_ALLDOGS, GET_NAME, GET_TEMPERAMENTS, ORDER, ORDER_ORIGIN, ORDER_TEMPERAMENT, POST } from "./actions";
import {validate} from "uuid"
const initialState = {
   Dogs:[],
   DogsCopy:[],
   Temperaments:[]
}

const reducer = (state = initialState, action)=>{
    let copy = [...state.Dogs]
switch (action.type) {
    
    case GET_ALLDOGS:
        return{
            ...state,
            Dogs: action.payload,
            DogsCopy: action.payload
        }
        case GET_TEMPERAMENTS:
            return{
                ...state,
               Temperaments: action.payload
            }
            case GET_NAME:
                return{
                    ...state,
                  Dogs: action.payload,
                  DogsCopy: action.payload
                }  
            case POST:{
                return{
                    ...state,
                    Dogs: [...state.Dogs, action.payload],
                    DogsCopy: [...state.DogsCopy, action.payload]
                }
            }          
     case ORDER:
       
       if(action.payload === "A") {
       const filter = copy.sort((a,b)=>a.Nombre.localeCompare(b.Nombre))
        return{
            ...state,
            Dogs: filter   
        }   }
        if(action.payload === "D") {
            const filter = copy.sort((a,b)=>b.Nombre.localeCompare(a.Nombre))
             return{
                 ...state,
                 Dogs: filter   
             }   }
         if(action.payload === "P-A") {
            const filter = copy.sort((a, b) => {
                const pesoA = Number(a.Peso.split("-")[0]);
                const pesoB = Number(b.Peso.split("-")[0]);
                
                if (pesoA === pesoB) {
                  const subPesoA = Number(a.Peso.split("-")[1]);
                  const subPesoB = Number(b.Peso.split("-")[1]);
                  return subPesoA - subPesoB;
                }
                
                return pesoA - pesoB;
              });
                 return{
                     ...state,
                     Dogs: filter   
                   }   }
                 if(action.payload === "P-D") {
                    const filter = copy.sort((a, b) => {
                        const pesoA = Number(a.Peso.split("-")[0]);
                        const pesoB = Number(b.Peso.split("-")[0]);
                        
                        if (pesoA === pesoB) {
                          const subPesoA = Number(a.Peso.split("-")[1]);
                          const subPesoB = Number(b.Peso.split("-")[1]);
                          return subPesoB - subPesoA;
                        }
                        
                        return pesoB - pesoA;
                      });
                         return{
                             ...state,
                             Dogs: filter   
                         }   }        
         case ORDER_ORIGIN:
            
           if(action.payload=== "BD"){
            let copyBd = [...state.DogsCopy]
            const filter = copyBd.filter(d=> validate(d.ID))
            return{
                ...state,
                Dogs:filter,  

            }
           }
           if(action.payload=== "API"){
            let copyApi = [...state.DogsCopy]
            const filter = copyApi.filter(d=> !validate(d.ID))
            return{
                ...state,
                Dogs:filter,
                
            }
           }
           case ORDER_TEMPERAMENT:
            let copyTemp = [...state.DogsCopy]; 
            const filterTemp = copyTemp.filter(d => {
              if (d.Temperamentos) {
                const tempArray = d.Temperamentos.split(",").map(t => t.trim());
                return tempArray.includes(action.payload);
              }
              
            });
            return {
              ...state,
              Dogs: filterTemp,
              
            };
    default: return state;
}
}

export default reducer;