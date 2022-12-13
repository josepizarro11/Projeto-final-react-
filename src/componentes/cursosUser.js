import React, { useState,useEffect} from 'react';
import Api from '../services/api';
import CardCursosUser from './cardCursosUser';
import { Container,Row } from 'react-bootstrap';


const CursosUser =()=>{

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
       
       <Container >
        <Row className='home'>
          {
            cursos.map((cursos,id) => {
                return(
                    <CardCursosUser 

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
export default CursosUser;