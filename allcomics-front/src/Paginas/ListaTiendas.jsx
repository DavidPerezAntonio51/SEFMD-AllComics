import { Badge, Carousel, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png";
import Layout4 from "../Assests/Layout4.png"
import Tiendas_icon from "../Assests/Tiendas_icon.png"
import tc_icon1 from "../Assests/tc_icon1.jpg"
import tc_icon2 from "../Assests/tc_icon2.jpg"
import tc_icon3 from "../Assests/tc_icon3.jpg"
import tc_icon4 from "../Assests/tc_icon4.jpg"
import tc_icon5 from "../Assests/tc_icon5.png"
import tc_icon6 from "../Assests/tc_icon6.jpg"
function ListaTiendas() {
    return (
        <>
            <Row>
                    <img
                        className="d-block w-100"
                        src={Tiendas_icon} />
            </Row>
            <Container>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className="text-center"></th>
                                <th className="text-center">Nombre de la Tienda</th>
                                <th className="text-center">Dirección</th>
                                <th className="text-center">Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon1} /></td>
                                <td>Comics Mexico</td>
                                <td>Av. Revolución 50, Escandón I Secc, Miguel Hidalgo, 11800 Ciudad de México, CDMX</td>
                                <td>Lun-Sab <br/>11:00hrs-20:00hrs </td>
                            </tr>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon2} /></td>
                                <td>Fantástico Comics</td>
                                <td>Félix Cuevas 835, Col del Valle Sur, Benito Juárez, 03100 Ciudad de México, CDMX</td>
                                <td>Lun-Dom <br/>10:00hrs-20:30hrs</td>
                            </tr>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon3} /></td>
                                <td>Xanddar Comics</td>
                                <td>Balderas 12 Piso 3, Despacho 301, Cuauhtémoc, 06000 Ciudad de México, CDMX</td>
                                <td>Lun-Sab <br/>10:00hrs-17:00hrs</td>
                            </tr>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon4} /></td>
                                <td>Unlimited Edition comics</td>
                                <td>C. 64 518-512, Centro, 97000 Mérida, Yuc</td>
                                <td>Lun-Dom <br/>10:00hrs-20:00hrs</td>
                            </tr>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon5} /></td>
                                <td>El Quinto Mundo</td>
                                <td>Prol. P.º de la Reforma 215-interior 505, Santa Fe, Bosques de las Lomas, Álvaro Obregón, 01330 Ciudad de México, CDMX</td>
                                <td>Lun-Dom <br/>12:00hrs-20:00hrs</td>
                            </tr>
                            <tr>
                                <td><img
                                    style={{ width: 80, height: 80, marginBottom: -10 }}
                                    src={tc_icon6} /></td>
                                <td>Xibalbá Store</td>
                                <td>Entrega a domicilio</td>
                                <td>Lun-Sab <br/>11:00hrs-17:00hrs</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                
           
            </Container>
            <Row>
                <img
           className="d-block w-100"
            src={Layout4} />
                </Row>
        </>
    );
}

export default ListaTiendas;