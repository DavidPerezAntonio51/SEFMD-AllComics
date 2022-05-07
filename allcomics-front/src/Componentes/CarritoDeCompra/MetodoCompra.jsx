import { useContext } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import PaymentContext from "../../Contextos/PaymentContext";

function MetodoCompra() {
  const paymentContext = useContext(PaymentContext);
  return (
    <Row>
      {paymentContext.PaymentType == '1'
        ?
        <Container>
          <Form>
            <style type="text/css">
              {`
    .btn-flat {
      background-color: purple;
      color: white;
    }
    .btn-cancel {
        background-color: red;
        color: white;
      }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
            </style>
            <h3 class="primary"> Tarjeta de Crédito o Débito</h3>
            <Form.Group className="mb-3" controlId="formBasicNT">
              <Form.Label>Número de Tarjeta (16 digitos)</Form.Label>
              <Form.Control type="number" placeholder="Ingrese los 16 dígitos de su tarjeta" />
              <Form.Text className="text-muted">
                Ingrese el número de tarjeta
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicV">
              <Form.Label>Vencimiento</Form.Label>
              <Form.Control type="month" placeholder="Ingrese la fecha de vencimiento en formato DD/AA" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCVV">
              <Form.Label>Código de seguridad (CVV)</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su código de seguridad CVV o CVC" />
              <Form.Text className="text-muted">
                El CVV o CVC se encuentra al reverso de su tarjeta, consta de 3 o 4 dígitos
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="flat" type="submit">
              Pagar
            </Button>
          </Form>
        </Container>
        :
        <Container>
          <h3 class="primary"> Transferencia electrónica</h3>
          <p class="p-2 mb-2 bg-info text-white text-center">Número de Cuenta</p>
          <p class="text-muted text-center">1943 0356 01 7254134980</p>
          <p class="p-2 mb-2 bg-info text-white text-center">Banco</p>
          <p class="text-muted text-center">Santander Serfin</p>
          <p class="text-dark"> El deposito se verá reflejado en un máximo de 48 horas o 2 días hábiles</p>
        </Container>
      }
    </Row >
  );
}

export default MetodoCompra;