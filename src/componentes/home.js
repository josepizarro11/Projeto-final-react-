import React from 'react';
import Cursos from './cursos';
import imagen from '../assets/imgsaude.png';

const Home = () => {
   
    return (
        <nav>

        <div> 
        <img src={imagen} className="img-fluid" alt="Responsive image">
        </img>
        <div className='CursosHome'>
        <h2 >veja o que temos pra voce!</h2>
        <img src='https://i.pinimg.com/736x/74/dd/b5/74ddb5981984424bc9afcf2b958f11df.jpg' width={100}></img>
        </div>
        <Cursos/>
        <div  className=''>
            <img></img>
        </div>
         </div>
         </nav>
    )
}
export default Home; 

