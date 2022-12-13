import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from '../componentes/usuarios';
import Footer from '../componentes/footer';
import NavBar from '../componentes/navBar';
// import Cursos from "../componentes/cursos";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Usuarios />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
