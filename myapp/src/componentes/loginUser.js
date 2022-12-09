import React from "react";
import Api from "../services/api";
import { useForm } from "react-hook-form";



const LoginUser = () => {

        const { register, handleSubmit, watch, formState: { errors } } = useForm();

       

        const loginSubmit = async (data) => {
           
          const response = await Api.post("./user/usuario",data)
          .then ( ({data}) => {
            localStorage.setItem ( "auth" , data.user.id) 
            console.log(response); 
         
        })
       }

 
      
        console.log(watch("example")); // watch input value by passing the name of it
      
        return (
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <form onSubmit={handleSubmit(loginSubmit)}>
           

            <label>Usuario</label>
            <input {...register("usuario", { required: true })} />
          
            {errors.usuario && <span>Este campo é obrigatório</span>}

            <label>Senha</label>
            <input {...register("senha", { required: true })} />
          
            {errors.senha && <span>Este campo é obrigatório</span>}
            
            <input type="submit" />
          </form>
      
        )
}
export default LoginUser;