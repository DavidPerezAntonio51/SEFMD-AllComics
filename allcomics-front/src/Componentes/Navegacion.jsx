import { useContext } from "react";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginContext from "../Contextos/LoginContext";


function Navegacion() {
    const managelogin = useContext(LoginContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Row xs={4}>
                        <Col>
                            All Comics
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Lista de Comics</Nav.Link>
                        <Nav.Link>Lista de Tiendas</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Búsqueda"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Búsqueda</Button>
                    </Form>
                    <Nav>
                        {!managelogin.Loged
                        ?
                        <Nav.Link as={Link} to="login">Iniciar Sesion</Nav.Link>
                        :
                        <Nav.Link as={Link} to="login">Cerrar Sesion</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;