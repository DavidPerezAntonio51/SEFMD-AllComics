import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";

function RegistroComic() {
    const [NombreComic, setNombreComic] = useState("");
    const [Serie, setSerie] = useState("");
    const [NumeroComic, setNumeroComic] = useState("");
    const [Editorial, setEditorial] = useState("");
    const [Portada, setPortada] = useState();

    const enviarDatos = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("nombre",NombreComic);
        data.append("serie",Serie);
        data.append("numerocomic",NumeroComic);
        data.append("editorial",Editorial);
        data.append("portada",Portada);
        ApiPublic.cargarComic(data).then((response) => {
            console.log(response);
        })
        setNombreComic("");
        setSerie("");
        setNumeroComic("");
        setEditorial("");
        setPortada("");
    }
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNombreC">
                    <Form.Label>Nombre Comic</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre del comic" onChange={(e)=>setNombreComic(e.target.value)} value={NombreComic}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSerieC">
                    <Form.Label>Serie</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la serie del comic" onChange={(e)=>setSerie(e.target.value)} value={Serie}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa el número del comic" onChange={(e)=>setNumeroComic(e.target.value)} value={NumeroComic}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEditorialC">
                    <Form.Label>Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la editorial del comic" onChange={(e)=>setEditorial(e.target.value)} value={Editorial}/>
                </Form.Group>

                <Form.Group controlId="formImagenComic" className="mb-3">
                    <Form.Label>Seleccione la imagen del Comic</Form.Label>
                    <Form.Control type="file" size="sm" accept="image/*" onChange={(e)=>setPortada(e.target.files[0])}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={enviarDatos}>
                    Ingresar Comic
                </Button>
            </Form>
        </Container>
    );
}

export default RegistroComic;