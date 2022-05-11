import { useContext, useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginContext from "../Contextos/LoginContext";
import ApiPublic from "../Servicios/apiPublica";
import LogoAC from "../Assests/LogoAC.png"
import "./Navegacion/nav.css"
import "../Componentes/colores.css"
import { Hint } from "react-autocomplete-hint";
import { useNavigate } from "react-router-dom";

function Navegacion() {
    const managelogin = useContext(LoginContext)
    const [Sugerencias, setSugerencias] = useState([]);
    const [valor, setvalor] = useState('');
    const navigate = useNavigate();

    const onChange = (event) => {
        setvalor(event.target.value)
        if(event.target.value === ''){
            setSugerencias([])
        }
    };
    const checkPeticion = () => {
        if (Sugerencias.length !== 0) {
            Sugerencias.map(str => {
                if (str.includes(valor)) {
                    return false;
                } else {
                    return true;
                }
            })
        } else {
            return true;
        }
        
    }
    useEffect(() => {
        if (valor != '' && checkPeticion()) {
            const datos = new URLSearchParams();
            datos.set("busqueda", valor);
            ApiPublic.autocompletado(datos)
                .then(response => {
                    setSugerencias(response.data)
                })
        }
    }, [valor])

    const handleBarraBusqueda = (e) => {
        if (e.key === 'Enter' && valor != '') {
            navigate('/comics?search=' + valor);
        } else if (e.key === 'Enter') {
            navigate('/comics');
        }
    }

    const handleOnClick = ()=> {
        if (valor != '') {
            navigate('/comics?search=' + valor);
        } else {
            navigate('/comics');
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Row xs={4}>
                        <Col>
                            <img
                                style={{ width: 140, height: 90, marginBottom: -10 }}
                                src={LogoAC} />
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Stack direction="horizontal" gap={3}>
                    <Hint options={Sugerencias} allowTabFill={true}>
                        <input
                            value={valor}
                            onChange={onChange}
                            onKeyDown={handleBarraBusqueda}
                            placeholder="Busca un comic"
                        />
                    </Hint>
                    <Button variant="outline-registro" onClick={handleOnClick}>Buscar</Button>
                </Stack>
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