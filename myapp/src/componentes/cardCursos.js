import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";



const CardCursos=({empresa}) => {

    
    return(
     <div className="col-4 mb-3">   
       <Container >
          <Card>
         

            <Card.Body>
            
                <ListGroup className="mb-2">
                     
                <Card.Title className="text-center">{empresa.name}</Card.Title>
                     
                    <ListGroupItem> <strong> Description</strong> {empresa.turma1.description} </ListGroupItem>
                    <ListGroupItem> <strong> url </strong> {empresa.turma1.url} </ListGroupItem>

                </ListGroup>
                <button className="btn btn-dark me-2 apagar" > Saiba mais</button>
               

            </Card.Body>
          </Card>
       </Container>
    </div>   
    )
}
export default  CardCursos;