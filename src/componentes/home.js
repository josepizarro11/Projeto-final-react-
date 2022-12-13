import React from 'react';
import Cursos from './cursos';
import imagen from '../assets/imgsaude.png';

const Home = () => {
   
    return (
        <nav>

        <div> 
        <img src={imagen} class="img-fluid" alt="Responsive image">
        </img>
        <Cursos/>
       
         </div>
         </nav>
    )
}
export default Home; 

