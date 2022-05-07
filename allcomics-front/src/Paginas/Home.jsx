import { Carousel, Col, Row } from "react-bootstrap";
import { Container, } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png";
import Layout1 from "../Assests/Layout1.png"

function Home(props) {
  return (
    <Container>
      <Row>
        <Col>
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

                <p class="text-muted">Tienda de comics no autorizada</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel_Layout1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 class="text-danger">Coming Soon...</h3>
                <p class="text-danger">Estaremos subiendo contenido proximamente.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel_Layout1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 class="text-danger">Coming Soon...</h3>
                <p class="text-danger">Estaremos subiendo contenido proximamente.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;