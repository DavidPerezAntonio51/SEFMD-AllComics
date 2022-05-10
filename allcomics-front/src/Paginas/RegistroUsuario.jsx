import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Aviso_icon from "../Assests/Aviso_icon.png";
import login_icon from "../Assests/login_icon.png"

function RegistroUsuario() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNombreUsuario">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre de usuario para la plataforma" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="address" placeholder="Ingresa tu Dirección Completa" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="number" placeholder="Ingresa tu teléfono de contacto" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Ten calma, jamás compartiremos tu información.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRFC">
                            <Form.Label>RFC</Form.Label>
                            <Form.Control type="text" placeholder="En caso de requerir una factura, ingresa tu RFC (Opcional)" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Acepto los terminos y condiciones del registro" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registrarte
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Row>
                        <img
                            className="rounded mx-auto d-block w-100"
                            src={login_icon}
                        />
                    </Row>
                    <Row>
                        <img
                            className="rounded mx-auto d-block w-100"
                            src={Aviso_icon}
                            alt="Wellcome to ALLComics"
                        />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistroUsuario;