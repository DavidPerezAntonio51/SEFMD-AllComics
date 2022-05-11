
import { Carousel, Col, Row, Button} from "react-bootstrap";
import React, { Component } from 'react';
import { Container, } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png";
import Carrusel_Layout2 from "../Assests/Carrusel_Layout2.png"
import Carrusel_Layout3 from "../Assests/Carrusel_Layout3.png"
import Layout1 from "../Assests/Layout1.png"
import Batman from "../Assests/Batman.jpg"
function Home(props) {
  return (

    <Container fluid>
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
                src={Carrusel_Layout2}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carrusel_Layout3}
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
    </Container>
  );
}

export default Home;