import React from "react";
import "../style/style.css"
import { Link } from "react-router-dom";


// navbar  a ser renderizado em telas menores (estilo hamburguer)
const NavHamb = () => {
  return (
    <div className="hamburguer">
      <div className="Item-menu2">
        <Link className="menu2" to="/" >Inicio</Link>
      </div>
      <div className="Item-menu2">
        <Link className="menu2" to="/username" >Usuario</Link>
      </div>
      <div className="Item-menu2">
        <Link className="menu2" to="/administrador" >Administrador</Link>
      </div>
     
    </div>
  )
}

export default NavHamb;