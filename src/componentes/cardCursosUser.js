import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const CardCursosUser = ({ cursos }) => {
  return (
    <div className='col-4 mb-3'>
      <Container>
        <Card>
          <Card.Body>
            <ListGroup className='mb-2'>
              <Card.Title className='text-center'>{cursos.name}</Card.Title>

              <ListGroupItem>
                {' '}
                <img
                  src={cursos.url}
                  alt='cardcursos'
                  className='img-cursos'
                  width={300}
                ></img>
              </ListGroupItem>
              <ListGroupItem className='subtitulos'>
                {' '}
                <strong> Descrição: </strong> {cursos.description}{' '}
              </ListGroupItem>

              <ListGroupItem className='subtitulos'>
                {' '}
                <strong> Duração: </strong> {cursos.duracion}{' '}
              </ListGroupItem>
            </ListGroup>
            <button className='btn'>Gostei</button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default CardCursosUser;
