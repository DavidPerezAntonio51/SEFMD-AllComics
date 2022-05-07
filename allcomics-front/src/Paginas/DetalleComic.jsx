import { Col, Container, Row, Stack, Form, Button } from "react-bootstrap";
import SpiderMan_2099 from "../Assests/SpiderMan_2099.jpg"

function DetalleComic() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={SpiderMan_2099}
                        className="rounded float-left"
                    />
                </Col>
                <Col>
                    <Row>
                        <Col md="auto">
                            <h3> Titulo del comic</h3>
                        </Col>
                        <Col>
                            Serie
                        </Col>
                        <Col>
                            Precio
                        </Col>
                    </Row>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Descripción del comic</p>
                    <p className="text-muted text-center">What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Editorial</p>
                    <p className="text-muted text-center">Editorial VID</p>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Agregar al carrito de compra</p>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="seleccione la cantidad a agregar" type="number" />
                        <Button variant="secondary">Añadir al carrito</Button>
                    </Stack>


                </Col>
            </Row>
        </Container >
    );
}

export default DetalleComic;