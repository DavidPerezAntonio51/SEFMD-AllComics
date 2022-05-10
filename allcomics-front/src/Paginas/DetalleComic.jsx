import { Col, Container, Row, Stack, Form, Button, Table } from "react-bootstrap";
import SpiderMan_2099 from "../Assests/SpiderMan_2099.jpg"

function DetalleComic() {
    return (
        <Container fluid>
            <Row>
                <Col md="auto">
                    <img src={SpiderMan_2099}
                       className="img-fluid rounded mx-auto"
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
                            Editorial
                        </Col>
                    </Row>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Descripción del comic</p>
                    <p className="text-muted text-center">What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Portada</p>
                    <p className="text-muted text-center">Regular</p>
                    <p className="p-2 mb-2 bg-dark text-white text-center">Disponibilidad</p>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Tienda</th>
                                    <th>Pz Disponibles:</th>
                                    <th>Precio</th>
                                </tr>
                               
                            </thead>
                            <tbody>

                            <tr>
                                    <th colSpan={2}>Comics Mexico</th>
                                    <th> 5 </th>
                                    <th>$129.00</th>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Xanddar Comics</th>
                                    <th> 2 </th>
                                    <th>$169.00</th>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Xibalbá Store</th>
                                    <th> 2 </th>
                                    <th>$130.00</th>
                                </tr>
                            </tbody>

                        </Table>
                    </Col>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una opcion de compra</option>
                            <option value="1">Comics Mexico </option>
                            <option value="2">Xanddar Comics</option>
                            <option value="3">Xibalbá Store </option>
                        </Form.Select>
                    </Col>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="seleccione la cantidad a agregar" type="number" />
                        <Button variant="secondary">Añadir al carrito</Button>
                    </Stack>


                </Col>
            </Row>
            <Row>
                <div></div>
            </Row>
        </Container >
    );
}

export default DetalleComic;