import React,{useState}from "react";
import { Link } from "react-router-dom";
import "../style/style.css"
import NavHamb from "./NavHamb";

const NavBar = ()=> {
    
    const [open, setOpen] = useState(false);
    return(
        
      


<div className="login">
  <div className="Item-menu">
    <Link className="menu" to="/" >Inicio</Link>
  </div>
  <div className="Item-menu">
    <Link className="menu" to="/username" >Usuario</Link>
  </div>
  <div className="Item-menu">
    <Link className="menu" to="/administrador" > Administrador</Link>
  </div>
 
</div>


<div onClick={() => setOpen(!open)} className="hambu1">
  <div className="hamb1" />
  <div className="hamb1" />
  <div className="hamb1" />
</div>


{open && <NavHamb />}





</header>
        
    )
    }
export default NavBar;