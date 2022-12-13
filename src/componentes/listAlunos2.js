import React, { useState, useEffect } from 'react';
import Api from '../services/api';
import ListAlunos from './listAlunos';



const ListaDeAlunos = () => {


    const getData = async () => {
        const response = await Api.get('/user?_embed=cursos');
        return response;
    }


    const [listAlunos, setListAlunos] = useState([]);
    const [updateState, setUpdateState] = useState(false)




    useEffect(() => {
        getData().then((response) => {
            setListAlunos(response.data);
        })
    }, [updateState])

    return (

        <>
            {
                listAlunos.map((user, id) => {
                    return (
                        <ListAlunos
                            key={id}
                            user={user}
                            setUpdateState={setUpdateState}
                            updateState={updateState}


                        />

                    )
                })
            
        }
       </>
    )
    
}

export default ListaDeAlunos;