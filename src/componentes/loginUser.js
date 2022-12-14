import React from "react";
import Api from "../services/api";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";





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
          <form className="container_for" onSubmit={handleSubmit(loginSubmit)}>
           

            <label className="usuario">Usuario</label>
            <input {...register("usuario", { required: true })} />
          
            {errors.usuario && <span>Este campo é obrigatório</span>}


            <label className="senha">Senha</label>
            <input {...register("senha", { required: true })} />
          
            {errors.senha && <span>Este campo é obrigatório</span>}
            
           <button type="submit"> <Link className="entrar" to="/meusCursos"><b>Entrar</b></Link></button>
           
           <p className="esq"> Não tem uma conta? <Link className="insc" to="/cadastroEstudantes"><b>Inscrever-se agora</b></Link></p>
          </form>
      
        )
}
export default LoginUser;