import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

function CarroCompra() {
    return ( 
        <Container>
            <Button variant="warning">Cambiar Método de Pago</Button>{' '}
            <Button variant="success">Realizar Pago</Button>{' '}
            <Button variant="danger">Vaciar Carrito</Button>
        </Container>
     );
}

export default CarroCompra;