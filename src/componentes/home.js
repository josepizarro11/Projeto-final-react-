import React from 'react';
import Cursos from './cursos';
import imagen from '../assets/imgsaude.png';

const Home = () => {
  return (
    <nav>
      <div>
        <div className='header'>
          <img src={imagen} className='img-fluid' alt='ResponsiveImage'></img>

          <div className='header-content'>
            <h1> Bem-estar com MedNorth</h1>
            <p>
              A MedNorth é uma plataforma desde 2002, surge da percepção da
              necessidade do bem-estar e actividade física para as empresas e
              colaboradores. O que é vital para manter a boa saúde e é uma
              ferramenta poderosa para a prevenção e o manejo de doenças mentais
              e físicas. Além disso, o exercício físico oferece uma infinidade
              de benefícios positivos, desde a melhora do humor até a melhoria
              da função cognitiva.
              <br />
              <br />
              Nosso site fornecemos uma série de cursos relacionados à saúde e
              segurança em ambientes de trabalho. Onde exploramos a importância
              de ter um equilíbrio quando se trata de atividade física, nutrição
              e bem-estar mental, para realmente cuidar de nossa saúde física
              geral.
            </p>
            <img
              alt='logoempresa'
              src='http://www.mednorth.org/wp-content/uploads/2013/08/medNorthLogo.jpg'
            />
          </div>
        </div>
        <div className='CursosHome'>
          <h2>veja o que temos pra voce!</h2>

          <img
            alt='logodemãos'
            src='https://i.pinimg.com/736x/74/dd/b5/74ddb5981984424bc9afcf2b958f11df.jpg'
            width={100}
          ></img>
        </div>
        <Cursos />
        <div className=''>
          <img
            alt='imagem'
            src='http://www.mednorth.org/wp-content/uploads/2013/08/medNorthLogo.jpg'
          ></img>
        </div>
      </div>
    </nav>
  );
};
export default Home;
