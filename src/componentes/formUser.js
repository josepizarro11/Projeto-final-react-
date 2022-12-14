import React from 'react';
import { useForm } from 'react-hook-form';
import Api from '../services/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FormUser = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ id: null, name: '', email: '', telefone: '' });

  const onSubmit = async (data) => {
    const response = await Api.post('./user', data);

    if (response.status === 201) {
      Swal.fire(
        'Guardado!',
        `O registro ${response.data.name} foi adicionado com sucesso!`,
        'success'
      );
      // setUpdateState(!updateState)
      navigate('/username');
    } else {
      Swal.fire('error!', 'Problemas para criar o registro', 'error');
    }
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className='user-form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Nome</label>
      <input {...register('name')} />

      {/* include validation with required or other standard HTML validation rules */}
      <label>email</label>
      <input type='email' {...register('email', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired2 && <span>Este campo é obrigatório</span>}
      <label>telefone</label>
      <input type='number' {...register('telefone', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <label>Usuario</label>
      <input {...register('usuario', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <label>Senha</label>
      <input type='password' {...register('senha', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <input type='submit' />
    </form>
  );
};
export default FormUser;
