import { useEffect, useState } from "react";
import { Col, Container, Row, Stack, Form, Button, Table, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import SpiderMan_2099 from "../Assests/SpiderMan_2099.jpg"
import ApiPublic from "../Servicios/apiPublica";
import "../Componentes/colores.css"

function DetalleComic() {
    const [params, setParams] = useSearchParams();
    const [Comic, setComic] = useState(null);

    useEffect(() => {
        ApiPublic.detallesComic(params)
            .then(response => {
                setComic(response.data);
            })
    }, [])


    return (
        <Container fluid>
            {Comic === null
                ?
                <Row>
                    <Col></Col>
                    <Col md={{ span: 4, offset: 3 }} xs={{ span: 4, offset: 0.75 }}>
                        <Stack direction="horizontal" gap={3} className="ms-2 me-auto " >
                            <Spinner animation="grow" variant="registro" />
                            <Spinner animation="grow" variant="purple" />
                            <Spinner animation="grow" variant="secondary" />
                        </Stack>
                    </Col>
                    <Col></Col>
                </Row>
                :
                <>
                    <Row>
                        <Col md="auto">
                            <img src={"data:image/png;base64," + btoa(new Uint8Array(Comic.portada.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}
                                className="img-fluid rounded mx-auto"
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Col md="auto">
                                    <h3>{Comic.nombre}</h3>
                                </Col>
                                <Col>
                                    Serie: {Comic.serie}
                                </Col>
                                <Col>
                                    Editorial: {Comic.editorial}
                                </Col>
                            </Row>
                            <p className="p-2 mb-2 bg-dark text-white text-center">Descripcion del Comic</p>
                            <p className="text-muted text-center">{Comic.descripcion + ""}</p>
                            <p className="p-2 mb-2 bg-dark text-white text-center">Portada</p>
                            <p className="text-muted text-center">{Comic.tipodeportada + ""}</p>
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
                </>
            }
        </Container >
    );
}

export default DetalleComic;