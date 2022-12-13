import React,{useEffect, useState}from "react";

import Api from "../services/api";
import Swal from "sweetalert2";

import {Container,FormGroup,FormControl } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";



 const EditAluno =() => { 

    const inicialValue = {
        id:"",
         nome:"",
         email:"", 
         telefone:""
     }
     
     const { id } = useParams()

     const URL = `http://localhost:3004/user/${id}`

    const [data,setData] = useState(inicialValue ) 
    let navigate = useNavigate();
 
     useEffect(() => {
       
        Api.get(`./user/${id}`)
        .then((response)=> {
        setData(response.data)
            })
        
         },[])
     
    const handlechange = ({target}) => {
        setData({
            ...data,
            [target.name] : target.value
        })

    }
    const handleEdit  = async (e) => {
        e.preventDefault()
          await axios.put(URL,data).then((response)=>{
            if (response.status === 200){
                Swal.fire(
                    'Editado!',
                    `O registro ${response.data.name} foi editado com sucesso!`,
                    'success'
                  )
                  
                  navigate('/');
    
                } else{
                    Swal.fire(
                        'error!',
                        'Problemas para editar o registro',
                        'error'
                      )
                }
            })
       
        }

          return (
            <div >
   
            
           <Container className="col-4" >
             
              <div className="card">
                <h1 className="titulo">Atualizando dados do Aluno</h1> 
              
            <form onSubmit={handleEdit}>
            
            <FormGroup className="mb-2">
           
       <label for="staticEmail" class="col-sm-2 col-form-label">Nome</label>
      
                 <FormControl 
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={data.name}
                  onChange={handlechange}
                  required
                 />
   
           
               </FormGroup>
   
               <FormGroup className="mb-2">
               <label for="staticEmail" class="col-sm-2 col-form-label">Telefone</label>
                 <FormControl 
                  type="text"
   
                  name="telefone"
                  placeholder ="telefone"
                  value={data.telefone}
                  onChange={handlechange}
                  required
                 />
   
           
               </FormGroup>
               <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
               <FormGroup className="mb-2">
                 <FormControl 
                  type="text"
                  name="email"
                  placeholder="email"
                  value={data.email}
                  onChange={handlechange}
                  required
                 />
   
           
               </FormGroup>
   
               
               <button className="btn btn-secondary  me-4 guardar" onClick={handleEdit}> Editar</button>
            </form>
      
             
      </div>
      </Container>
      </div>
   )
   }

   export default EditAluno;
         