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
import { useEffect, useState } from "react";
import ApiPublic from "../Servicios/apiPublica";
function ListaTiendas() {
    const [Tiendas, setTiendas] = useState([]);
    useEffect(() => {
        ApiPublic.obtenerListaTiendas()
            .then(response => {
                setTiendas(response.data);
            })
    }, [])

    return (
        <>
            <div>
                <img
                    className="d-block w-100"
                    src={Tiendas_icon} />
            </div>

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
                            {Tiendas.map(tienda => {
                                return (
                                    <tr>
                                        <td><img
                                            style={{ width: 80, height: 80, marginBottom: -10 }}
                                            src={"data:image/png;base64," + btoa(new Uint8Array(tienda.imagentienda.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))} />
                                        </td>
                                        <td>{tienda.nombre}</td>
                                        <td>{tienda.direccion}</td>
                                        <td>{tienda.horario}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>

            <div>
                <img
                    className="d-block w-100"
                    src={Layout4} />
            </div>

        </>
    );
}

export default ListaTiendas;