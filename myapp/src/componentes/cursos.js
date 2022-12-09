import React, { useState,useEffect} from 'react';
import Api from '../services/api';
import CardCursos from './cardCursos';


const Cursos =()=>{

    const [cursos,setCursos] = useState([]);
    const [updateState,setUpdateState] = useState(false)

    const getData = async()=>{
        const response = await Api.get('/empresa')
         return response
    }

    useEffect(()=>{
        
        getData().then((response)=>{
            setCursos(response.data)
            console.log(response)
        })
    },[updateState])
    return(
       
       <div>
          {
            cursos.map((empresa,id) => {
                return(
                    <CardCursos 

                    key={id}
                 empresa={empresa}
                 setUpdateState={setUpdateState}
                 updateState={updateState}
                    />
                )

            })
          }
        </div>
    )
}
export default Cursos;