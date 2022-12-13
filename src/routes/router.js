import React from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../componentes/home";
import Footer from "../componentes/footer";
import NavBar from "../componentes/navBar";
import LoginUser from "../componentes/loginUser";
import LoginAdministrador from "../componentes/LoginEmpresa";
import EditAluno from "../componentes/editteste";
import FormUser from "../componentes/formUser";
import ListaDeAlunos from "../componentes/listAlunos2";
import CursosUser from "../componentes/cursosUser";


const Router =()=>{

return (   
<BrowserRouter>
<NavBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/alumnosEdit/:id" element={< EditAluno />} />
    <Route exact path="/username" element={< LoginUser />} />
    <Route exact path="/administrador" element={<LoginAdministrador />} />
    <Route exact path="/cadastroEstudantes" element={<FormUser/>} />
    <Route exact path="/meusCursos"element={<CursosUser />}/>
    <Route exact path="/accesoAdministrador"element={< ListaDeAlunos/>}/>
    <Route exact path="/cursos"element={< LoginUser/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>)
}
export default Router;