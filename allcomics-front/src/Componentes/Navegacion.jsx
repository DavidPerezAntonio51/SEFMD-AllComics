import { Button } from "react-bootstrap";
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navegacion() {
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
                        <Nav.Link>Lista de Editoriales</Nav.Link>
                        <Nav.Link>Lista de Comics</Nav.Link>
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
                        <Nav.Link>Iniciar Sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;