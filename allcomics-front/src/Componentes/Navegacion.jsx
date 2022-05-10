import { useContext, useState } from "react";
import Autosuggest from "react-autosuggest";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginContext from "../Contextos/LoginContext";
import ApiPublic from "../Servicios/apiPublica";
import Sugerencia from "./Navegacion/Sugerencia";
import LogoAC from "../Assests/LogoAC.png"


function Navegacion() {
    const managelogin = useContext(LoginContext)
    const [Sugerencias, setSugerencias] = useState([]);
    const [valor, setvalor] = useState('');

    const limpiarSugerencias = () => {
        setSugerencias([]);
    }

    const obtenerValorSugerido = (sugerencia) => sugerencia

    const onChange = (event, { newValue }) => {
        setvalor(newValue)
    };

    const peticionSugerencias = ({ value }) => {
        const datos = new URLSearchParams();
        datos.set("busqueda", value);
        ApiPublic.autocompletado(datos)
            .then(response => setSugerencias(response.data))
    }

    const inputProps = {
        placeholder: 'Buscar Comic',
        value: valor,
        onChange: onChange
    };


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Row xs={4}>
                        <Col>
                            <img
                                style={{ width: 140, height: 90, marginBottom: -20 }}
                                src={LogoAC} />                        
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Form className="d-flex">
                    <Stack direction="horizontal" gap={3}>
                        <Autosuggest
                            suggestions={Sugerencias}
                            onSuggestionsFetchRequested={peticionSugerencias}
                            onSuggestionsClearRequested={limpiarSugerencias}
                            getSuggestionValue={obtenerValorSugerido}
                            renderSuggestion={Sugerencia}
                            inputProps={inputProps}
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Stack>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="comics" >Lista de Comics</Nav.Link>
                        <Nav.Link as={Link} to="tiendas">Lista de Tiendas</Nav.Link>
                    </Nav>
                    <Nav>
                        {!managelogin.Loged
                            ?
                            <Nav.Link as={Link} to="login">Iniciar Sesion</Nav.Link>
                            :
                            <>
                                <Nav.Link as={Link} to="carrito">Carrito de Compra</Nav.Link>
                                <Nav.Link as={Link} to="login">Cerrar Sesion</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;