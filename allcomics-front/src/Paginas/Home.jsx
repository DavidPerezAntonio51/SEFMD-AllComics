import { Carousel, Col, Row, Button } from "react-bootstrap";
import { Container, } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png";
import Layout1 from "../Assests/Layout1.png"

function Home(props) {
  return (

    <>
      <Row>
        <Col >
          <img
            className="d-block w-100"
            src={Layout1} />
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"

                src={Carrusel_Layout1}
                alt="Wellcome to ALLComics"
              />
              <Carousel.Caption>

                <p>Tienda de comics no autorizada</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block 	w-100"
                src={Carrusel_Layout1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Coming Soon...</h3>
                <p>Estaremos subiendo contenido proximamente.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel_Layout1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Coming Soon...</h3>
                <p>Estaremos subiendo contenido proximamente.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <h1 style={{ color: '#138CFF' }}>
          Nuevos Lanzamientos
          <Button
            variant="outline-secondary">
            Ver mas...
          </Button>
        </h1>
      </Row>
      <Row></Row>
    </>
  );
}

export default Home;