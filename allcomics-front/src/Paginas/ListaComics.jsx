import { Badge, ListGroup } from "react-bootstrap";
import SpiderMan_2099 from "../Assests/SpiderMan_2099.jpg"
import Halo from "../Assests/Halo.jpg"
import Batman from "../Assests/Batman.jpg"

function ListaComics() {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div>
                    <img src={SpiderMan_2099}
                        className="img-thumbnail"
                        width={150}
                    />
                </div>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Comic #1</div>
                    Descripción breve del comic seleccionado y que se encuentre dentro del carrito de compra
                </div>
                <Badge bg="primary" pill>
                    $ 194.00 MXN
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div>
                    <img src={Halo}
                        className="img-thumbnail"
                        width={150}
                    />
                </div>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Comic #2</div>
                    Descripción breve del comic 2 seleccionado y que se encuentre dentro del carrito de compra
                </div>
                <Badge bg="primary" pill>
                    $ 145.00 MXN
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div>
                    <img src={Batman}
                        className="img-thumbnail"
                        width={150}
                    />
                </div>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Comic #3</div>
                    Descripción breve del comic 3 seleccionado y que se encuentre dentro del carrito de compra
                </div>
                <Badge bg="primary" pill>
                    $99.00 MXN
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ListaComics;