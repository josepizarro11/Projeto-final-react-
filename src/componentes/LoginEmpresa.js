import React from "react";
import Api from "../services/api";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ListaDeAlunos from "./listAlunos"
import { Button } from "react-bootstrap";



const LoginAdministrador = () => {

        const { register, handleSubmit, watch, formState: { errors } } = useForm();

       


      const onSubmit = data=> console.log(data);
      
        console.log(watch("example")); // watch input value by passing the name of it
      
        return (
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <form className="container_for" onSubmit={handleSubmit(onSubmit)}>
           

            <label>Usuario</label>
            <input {...register("usuario", { required: true })} />
          
            {errors.usuario && <span>Este campo é obrigatório</span>}

            <label>Senha</label>
            <input {...register("senha", { required: true })} />
          
            {errors.senha && <span>Este campo é obrigatório</span>}
            
            <button type="submit"> <Link to=  "/accesoAdministrador">Entrar</Link></button>
            
          </form>
      
        )
}
export default LoginAdministrador;