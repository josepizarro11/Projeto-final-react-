import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardCursos = ({ cursos }) => {
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
                  alt='imagem'
                  className='img-cursos'
                  width={300}
                ></img>
              </ListGroupItem>
              <ListGroupItem className='subtitulos'>
                {' '}
                <strong> Descrição: </strong> {cursos.description}{' '}
              </ListGroupItem>
            </ListGroup>
            <button className='btn btn-dark me-2 apagar'>
              {' '}
              <Link to='/cursos'>Gostei</Link>
            </button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default CardCursos;
