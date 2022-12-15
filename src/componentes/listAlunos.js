import React from 'react';
import Swal from 'sweetalert2';
import Api from '../services/api';
import { Link } from 'react-router-dom';

const ListAlunos = ({ user, updateState, setUpdateState }) => {
  const deleteData = async () => {
    const resp = await Api.delete(`/user/${user.id}`);
    return resp;
  };

  const handleDelete = async () => {
    Swal.fire({
      title: `Tem certeza, que deseja eliminar?`,
      text: 'Você não será capaz de reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#218838',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'sim, Apagar!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData().then((response) => {
          if (response.status === 200) {
            Swal.fire(
              'Eliminado!',
              `O registro ${user.name} foi eliminado !`,
              'success'
            );
            setUpdateState(!updateState);
          } else {
            Swal.fire(
              'Eliminado!',
              `Problema para Apagar o registro ${user.name} !`,
              'error'
            );
          }
        });
      }
    });
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID </th>
          <th>Nome do Aluno</th>
          <th>Email</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.telefone}</td>
          <td>{user.cursos[2]}</td>

          <td className='btn-table2'>
            <div className='mb-3'>
              <button className='btn btn-danger' onClick={handleDelete}>
                Apagar
              </button>
            </div>
          </td>
          <td className='btn-table'>
            <div className='mb-3'>
              <button className='btn btn-dark'>
                {' '}
                <Link
                  to={`/alumnosEdit/${user.id}`}
                  className='btn  btn-info  '
                >
                  Atualizar
                </Link>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ListAlunos;
