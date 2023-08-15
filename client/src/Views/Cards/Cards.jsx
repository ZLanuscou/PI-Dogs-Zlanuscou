import Card from "../Card/Card"
import "./cards.css"
export default function Cards(props) {
    const {allDogs} = props
    return(
        <div className="container">
        {allDogs && allDogs.map((d)=><Card dog={d}/>)}    
        </div>
    )
}