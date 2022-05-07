import { Button, Container, Form } from "react-bootstrap";

function RegistroComic() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNombreC">
                    <Form.Label>Nombre Comic</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre del comic" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSerieC">
                    <Form.Label>Serie</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la serie del comic" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa el número del comic" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEditorialC">
                    <Form.Label>Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la editorial del comic" />
                </Form.Group>

                <Form.Group controlId="formImagenComic" className="mb-3">
                    <Form.Label>Seleccione la imagen del Comic</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ingresar Comic
                </Button>
            </Form>
        </Container>
    );
}

export default RegistroComic;