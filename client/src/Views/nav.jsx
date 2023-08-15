import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";
export default function Nav(props) {
    return(
  <div className="navBackground">
    
    <Link className="link"to="/home">HOME</Link>
    
    <Link className="link"to="/form">CREATE DOG</Link>
  </div>

    )
}