import { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    const [correo , setCorreo] = useState("");
    const [contraseña, setContrasaeña] = useState("");

    const handleChangeCorreo = (e) => {
        setCorreo(e.target.value);
    }

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
                        <Form.Control value={correo} type="email" placeholder="Enter email" onChange={handleChangeCorreo}/>
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
                ¿Aun no tienes una cuenta? <Link to={"/registro"}>¡Registrate!</Link>
            </Form>
        </Container>
    );
}

export default Login;