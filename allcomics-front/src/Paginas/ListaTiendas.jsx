import { Badge, Carousel, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png";
import Layout1 from "../Assests/Layout1.png"


function ListaTiendas() {
    return (
        <Container>
            <style type="text/css">
                {`
        .text-purple{
          color:purple;
      }
        `}
            </style>
            <Row>
                <Col></Col>
                <Col xs lg="7">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrusel_Layout1}
                                alt="Wellcome to ALLComics"
                            />
                            <Carousel.Caption>

                                <p class="text-muted">Tienda de comics no autorizada</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrusel_Layout1}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-purple">Coming Soon...</h3>
                                <p className="text-purple">Estaremos subiendo contenido proximamente.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrusel_Layout1}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className="text-purple">Coming Soon...</h3>
                                <p className="text-purple">Estaremos subiendo contenido proximamente.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Nombre de la Tienda</th>
                            <th className="text-center">Dirección</th>
                            <th className="text-center">Horario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Comics Batarang</td>
                            <td>Av. Pantitlán 11, Col. Porvenir, 57430 Nezahualcóyotl, Méx.</td>
                            <td>15:00-20:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Fantástico Comics</td>
                            <td>Félix Cuevas 835, Col del Valle Sur, Benito Juárez, 03100 Ciudad de México, CDMX</td>
                            <td>10:00-20:30</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Global Comics Noveno Arte</td>
                            <td>San Luis Potosí 109, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</td>
                            <td>10:00-17:00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mx Prados</td>
                            <td>Blvrd Prados de Aragón, Prados de Aragon, 57179 Nezahualcóyotl, Méx.</td>
                            <td>12:00-21:00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Panini Oceanía</td>
                            <td>Av. del Peñón 355, Moctezuma 2da Secc, Venustiano Carranza, 15530 Ciudad de México, CDMX</td>
                            <td>11:00-20:00</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>PHOENIX COMICS</td>
                            <td>Plaza Río Local Q-13 Q-14, Cto Interior Avenida Río Churubusco 775, INFONAVIT Iztacalco, Iztacalco, 08900 Ciudad de México, CDMX</td>
                            <td>09:00-20:00</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ListaTiendas;