import { Badge, Carousel, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import Layout4 from "../Assests/Layout4.png"
import Tiendas_icon from "../Assests/Tiendas_icon.png"
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
                                    <tr key={tienda.id}>
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