import { Badge, ListGroup, Col, Pagination, Spinner, Stack, Row, Container } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";
import { useEffect, useState } from "react";
import "../Componentes/colores.css"
import { useSearchParams } from "react-router-dom";


function ListaComics() {
    const [ListaComics, setListaComics] = useState([]);
    const [ShowLoading, setShowLoading] = useState(true);
    const [ActivePage, setActivePage] = useState(1);
    const [Paginas, setPaginas] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get("search"))
        if (searchParams.get("search") === null) {
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
        } else {
            ApiPublic.paginasResultados(searchParams)
                .then(response => setPaginas(response.data))
            ApiPublic.buscar(searchParams)
                .then(response => setListaComics(response.data))
                .finally(() => {
                    setShowLoading(false)
                })
        }

    }, [])
    useEffect(() => {
        setListaComics([])
        setShowLoading(true)
        if (searchParams.get("search") === null) {
            const params = new URLSearchParams();
            params.append("page", ActivePage - 1);
            ApiPublic.obtenerListaComics(params)
                .then(response => {
                    console.log(response.data)
                    setListaComics(response.data)
                })
                .finally(e => {
                    setShowLoading(false);
                })
        } else {
            console.log("pagina comics")
        }
    }, [ActivePage])
    useEffect(() => {
        setSearchParams({ page: ActivePage, search: searchParams.get('search') })
        console.log(searchParams.get('page'));
        console.log(searchParams.get('search'));
        if (searchParams.get("search") !== null) {
            setListaComics([])
            setShowLoading(true)
            setActivePage(1)
            console.log("peticion de comics")
        } else {
            setActivePage(1)
            const params = new URLSearchParams();
            params.append("page", ActivePage - 1);
            ApiPublic.obtenerListaComics(params)
                .then(response => {
                    console.log(response.data)
                    setListaComics(response.data)
                })
                .finally(e => {
                    setShowLoading(false);
                })
        }
    }, [searchParams])


    const handlePage = (e) => {
        //console.log(e.active)
        //console.log(e.target.firstChild.data)
        setActivePage(e.target.firstChild.data)
    }


    return (
        <Container fluid>
            <ListGroup as="ol" numbered>
                {ListaComics.map((comic, index) => {
                    return (
                        <Row className="justify-content-md-center">
                            <ListGroup.Item
                                key={index}
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <Col xs={2} md={2} lg={2}>
                                    <img src={"data:image/png;base64," + btoa(new Uint8Array(comic.portada.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}
                                        className="img-thumbnail"
                                        width={200}
                                    />
                                </Col>
                                <Col xs={9} md={9} lg={9} className="text-align-left text-wrap">
                                    <div className="fw-bold">{comic.nombre} #{comic.numerocomic}</div>
                                    Serie: {comic.serie}
                                </Col>
                                <Badge bg="primary text-wrap" pill >
                                    Ver opciones en Existencia
                                </Badge>
                            </ListGroup.Item>
                        </Row>
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
        </Container>
    );
}

export default ListaComics;