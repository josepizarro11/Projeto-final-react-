import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Api from '../services/api';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

const FormEditA = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ id: null, name: '', email: '', telefone: '' });

  useEffect(() => {
    Api.get(`./user/${id}`).then((response) => {
      register(response.data);
    });
  }, [id, register]);

  const onSubmit = async (data) => {
    const response = await Api.put(`./user/${id}`, data);

    if (response.status === 201) {
      Swal.fire(
        'Guardado!',
        `O registro ${response.data.name} foi editado com sucesso!`,
        'success'
      );

      navigate('/accesoAdministrador');
    } else {
      Swal.fire('error!', 'Problemas para editar o registro', 'error');
    }
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Nome</label>
      <input {...register('name')} />

      {/* include validation with required or other standard HTML validation rules */}
      <label>email</label>
      <input {...register('email', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired2 && <span>Este campo é obrigatório</span>}
      <label>telefone</label>
      <input {...register('telefone', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <label>Usuario</label>
      <input {...register('usuario', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <label>Senha</label>
      <input {...register('senha', { required: true })} />

      {errors.exampleRequired && <span>Este campo é obrigatório</span>}

      <input type='submit' />
    </form>
  );
};
export default FormEditA;
