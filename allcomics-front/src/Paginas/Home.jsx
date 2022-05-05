
import { Carousel, Container, } from "react-bootstrap";
import Carrusel_Layout1 from "../Assests/Carrusel_Layout1.png"
function Home(props) {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carrusel_Layout1}
            alt="Wellcome to ALLComics"
          />
          <Carousel.Caption>
          <h3>Tienda de comics no autorizada</h3>
          <p>Estaremos subiendo contenido proximamente.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
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
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Coming Soon...</h3>
            <p>Estaremos subiendo contenido proximamente.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;