import { Badge, Button, Col, ListGroup, Row, Stack } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SumaRestaArticulo from "../Componentes/SumaRestaArticulo";
import MetodoCompra from "../Componentes/CarritoDeCompra/MetodoCompra";
import CheckMetodoPago from "../Componentes/CarritoDeCompra/CheckMetodoPago";
import { useContext } from "react";
import PaymentContext from "../Contextos/PaymentContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function CarroCompra() {
    const paymentContext = useContext(PaymentContext);
    const MySwal = withReactContent(Swal);

    const Pago = (e) => {

        MySwal.fire(
            'Pago exitoso'
        )
    }
    return (
        <Container>
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
            <Row>
                <Col>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #1</div>
                                Descripción breve del comic seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $ 194.00 MXN
                            </Badge>
                            <SumaRestaArticulo />
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #2</div>
                                Descripción breve del comic 2 seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $ 145.00 MXN
                            </Badge>
                            <SumaRestaArticulo />
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #3</div>
                                Descripción breve del comic 3 seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $99.00 MXN
                            </Badge>
                            <div>
                                <SumaRestaArticulo />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #4</div>
                                Descripción breve del comic 4 seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $ 86.00 MNXN
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #5</div>
                                Descripción breve del comic 5 seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $ 200.00 MXN
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Comic #6</div>
                                Descripción breve del comic 6 seleccionado y que se encuentre dentro del carrito de compra
                            </div>
                            <Badge bg="primary" pill>
                                $214.00 MXN
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h1 align="center">
                        <Badge bg="dark" pill>
                            Monto Total a PAGAR
                        </Badge>
                    </h1>
                    <Stack gap={3}>
                        <Button variant="flat" onClick={paymentContext.switchShowPaymentMetod}>Cambiar Método de Pago</Button>{' '}
                        {paymentContext.ShowPaymentMetod
                            ?
                            <Container>
                                <CheckMetodoPago />
                                <MetodoCompra />
                            </Container>
                            : ""
                        }
                        <Button variant="registro" onClick={Pago}>Realizar Pago</Button>{' '}
                        <Button variant="cancel">Vaciar Carrito</Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default CarroCompra;