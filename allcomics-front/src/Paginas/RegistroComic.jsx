import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../Componentes/colores.css"

function RegistroComic() {
    const [NombreComic, setNombreComic] = useState("");
    const [Serie, setSerie] = useState("");
    const [NumeroComic, setNumeroComic] = useState("");
    const [Editorial, setEditorial] = useState("");
    const [Portada, setPortada] = useState();
    const [TipodePortada, setTipodePortada] = useState();
    const [Descripcion, setDescripción] = useState();
    const MySwal =withReactContent(Swal) ;

    const enviarDatos = (e) => {
        MySwal.fire(
            'Registro exitoso'
        )
        e.preventDefault();
        const data = new FormData();
        data.append("nombre",NombreComic);
        data.append("serie",Serie);
        data.append("numerocomic",NumeroComic);
        data.append("editorial",Editorial);
        data.append("tipodeportada",TipodePortada);
        data.append("descripción",Descripcion);
        data.append("portada",Portada);
        ApiPublic.cargarComic(data).then((response) => {
            console.log(response);
        })
        setNombreComic("");
        setSerie("");
        setNumeroComic("");
        setEditorial("");
        setTipodePortada("");
        setDescripción("");
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
                <Form.Group className="mb-3" controlId="formBasicTipoPortada">
                    <Form.Label>Tipo de portada</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el tipo de pórtada" onChange={(e)=>setTipodePortada(e.target.value)} value={TipodePortada}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescripcionC">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la descripción del comic" onChange={(e)=>setDescripción(e.target.value)} value={Descripcion}/>
                </Form.Group>

                <Form.Group controlId="formImagenComic" className="mb-3">
                    <Form.Label>Seleccione la imagen del Comic</Form.Label>
                    <Form.Control type="file" size="sm" accept="image/*" onChange={(e)=>setPortada(e.target.files[0])}/>
                </Form.Group>

                <Button variant="registro" type="submit" onClick={enviarDatos}>
                    Ingresar Comic
                </Button>
            </Form>
        </Container>
    );
}

export default RegistroComic;