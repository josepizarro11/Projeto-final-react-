import React, { useState,useEffect} from 'react';
import Api from '../services/api';
import CardCursos from './cardCursos';
import {Container, Row} from  "react-bootstrap";


const Cursos =()=>{


    const [cursos,setCursos] = useState([]);
    const [updateState,setUpdateState] = useState(false)

    const getData = async()=>{
        const response = await Api.get('/cursos')
         return response
    }

    useEffect(()=>{
        
        getData().then((response)=>{
            setCursos(response.data)
            console.log(response)
        })
    },[updateState])
    return(
       
        <Container>
            <Row className='home'>
          {
            cursos.map((cursos,id) => {
                return(
                    <CardCursos 

                    key={id}
                cursos={cursos}
                 setUpdateState={setUpdateState}
                 updateState={updateState}
                    />
                )

            })
          }
          </Row>
       </Container>
    )
}
export default Cursos;