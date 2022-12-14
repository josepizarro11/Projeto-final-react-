import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <p>
          <b>Endereço:</b> Av. Paulista Bela vista, São Paulo - SP.{' '}
          <space> </space>
          <b>Email:</b> MedNorth@gmail.com
        </p>

        <span className='footer_span'>Copyright &copy; 2022</span>
      </div>
    );
  }
}
