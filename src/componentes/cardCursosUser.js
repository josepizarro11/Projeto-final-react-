import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";



const CardCursosUser=({cursos}) => {

    
    return(
     <div className="col-4 mb-3">   
       <Container >
          <Card>
         

            <Card.Body>
            
                <ListGroup className="mb-2">
                     
                <Card.Title className="text-center">{cursos.name}</Card.Title>
                     
                    <ListGroupItem> <strong> Description</strong> {cursos.description} </ListGroupItem>
                    <ListGroupItem> <strong> url </strong> {cursos.url} </ListGroupItem>
                    <ListGroupItem> <strong> duracion </strong> {cursos.duracion} </ListGroupItem>
                    
                </ListGroup>
                <button className="btn" >Gostei</button>
               

            </Card.Body>
          </Card>
       </Container>
    </div>   
    )
}
export default  CardCursosUser;