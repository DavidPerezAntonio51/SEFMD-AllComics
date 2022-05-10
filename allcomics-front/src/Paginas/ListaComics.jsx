import { Badge, ListGroup, Col, Pagination, Spinner, Stack, Row } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";
import { useEffect, useState } from "react";
import "../Componentes/colores.css"

function ListaComics() {
    const [ListaComics, setListaComics] = useState([]);
    const [ShowLoading, setShowLoading] = useState(true);
    const [ActivePage, setActivePage] = useState(1);
    const [Paginas, setPaginas] = useState([])
    let items = [];
    useEffect(() => {
        ApiPublic.obtenerListaComics()
            .then(response => {
                console.log(response.data)
                setListaComics(response.data)
            })
            .finally(e => {
                setShowLoading(false);
            })
        ApiPublic.totalComics()
            .then(response => {
                console.log(response.data)
                setPaginas(response.data)
            })
    }, [])
    useEffect(() => {
        setListaComics([])
        setShowLoading(true)
        const params = new URLSearchParams();
        params.append("page", ActivePage-1);
        ApiPublic.obtenerListaComics(params)
            .then(response => {
                console.log(response.data)
                setListaComics(response.data)
            })
            .finally(e => {
                setShowLoading(false);
            })
    }, [ActivePage])

    const handlePage = (e) => {
        //console.log(e.active)
        //console.log(e.target.firstChild.data)
        setActivePage(e.target.firstChild.data)
    }


    return (
        <>
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
                        <Col md={{ span: 4, offset: 3 }} xs={{ span: 4, offset: 0.75 }}>
                            <Stack direction="horizontal" gap={3} className="ms-2 me-auto " >
                                <Spinner animation="grow" variant="primary" />
                                <Spinner animation="grow" variant="secondary" />
                                <Spinner animation="grow" variant="success" />
                            </Stack>
                        </Col>
                        <Col></Col>
                    </Row>
                    : ""
                }
            </ListGroup>
            <>
                <Pagination>{Paginas.map(
                    pagina => {
                        return (
                            <Pagination.Item key={pagina} active={ActivePage === pagina} onClick={handlePage}>{pagina}</Pagination.Item>
                        )
                    })}</Pagination>
            </>
        </>
    );
}

export default ListaComics;