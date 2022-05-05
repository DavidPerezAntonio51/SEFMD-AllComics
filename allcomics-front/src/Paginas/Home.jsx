
import { Carousel, Container, } from "react-bootstrap";

function Home(props) {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="Wellcome to ALLComics"
                    />
                    <Carousel.Caption>
                        <h3>Pagina dedicada a venta de comics</h3>
                        <p>Aqui podras encontrar los mejores comics de varias tiendas en el pais</p>
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