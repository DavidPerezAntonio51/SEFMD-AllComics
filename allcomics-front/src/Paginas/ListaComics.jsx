import { Badge, Col, ListGroup, Row, Spinner, Stack } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";
import { useEffect, useState } from "react";
import "../Componentes/colores.css"

function ListaComics() {
    const [ListaComics, setListaComics] = useState([]);
    const [ShowLoading, setShowLoading] = useState(true)
    let tumb;
    useEffect(() => {
        ApiPublic.obtenerListaComics().then(response => {
            console.log(response.data)
            setListaComics(response.data)
        })
            .finally(e => {
                setShowLoading(false);
            })
    }, [])


    return (
        <ListGroup as="ol" numbered>
            {ListaComics.map((comic, index) => {
                return (
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div>
                            <img src={"data:image/png;base64," + btoa(new Uint8Array(comic.portada.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}
                                className="img-thumbnail"
                                width={100}
                            />
                        </div>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{comic.nombre} #{comic.numerocomic}</div>
                            Serie: {comic.serie}
                        </div>
                        <Badge bg="primary" pill>
                            Ver opciones en Existencia
                        </Badge>
                    </ListGroup.Item>
                )
            })}
            {ShowLoading
                ?
                <Row>
                    <Col></Col>
                    <Col md={{ span: 4, offset: 3 }}>
                        <Stack direction="horizontal" gap={3} className="ms-2 me-auto " >
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="purple" />
                        </Stack>
                    </Col>
                    <Col></Col>
                </Row>
                : ""
            }
        </ListGroup>
    );
}

export default ListaComics;