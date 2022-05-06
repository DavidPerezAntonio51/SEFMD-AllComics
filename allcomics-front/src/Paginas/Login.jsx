import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function Login() {
    return (
        <Container>
            <h1>Iniciar Sesion en All Comics</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Correo Electronico"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="Enter email" />
                    </FloatingLabel>
                    <Form.Text className="text-muted">
                        No compartas tu correo electronico con personas no autorizadas
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Contraseña"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesion
                </Button>
                ¿Aun no tienes una cuenta? ¡Registrate!
            </Form>
        </Container>
    );
}

export default Login;