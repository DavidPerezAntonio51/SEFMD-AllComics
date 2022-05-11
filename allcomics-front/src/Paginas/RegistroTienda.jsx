import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ApiPublic from "../Servicios/apiPublica";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../Componentes/colores.css"

function RegistroTienda() {
    const [NombreTienda, setNombreTienda] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [RFC, setRFC] = useState("");
    const [IconoTienda, ImagenTienda] = useState();
    const MySwal =withReactContent(Swal) ;

    const enviarDatos = (e) => {
        MySwal.fire(
            'Registro exitoso'
        )
        e.preventDefault();
        const data = new FormData();
        data.append("nombre",NombreTienda);
        data.append("direccion",Direccion);
        data.append("rfc",RFC);
        data.append("ImagenTienda",IconoTienda);
        ApiPublic.cargarComic(data).then((response) => {
            console.log(response);
        })
        setNombreTienda("");
        setDireccion("");
        setRFC("");
        ImagenTienda("");
    }

    return ( 
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicNombreT">
                <Form.Label>Nombre de la Tienda</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el nombre de la tienda" onChange={(e)=>setNombreTienda(e.target.value)} value={NombreTienda}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingresa la dirección de la tienda" onChange={(e)=>setDireccion(e.target.value)} value={Direccion}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRFC">
                <Form.Label>RFC</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el RFC de la tienda" onChange={(e)=>setRFC(e.target.value)} value={RFC}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagenTienda" >
                    <Form.Label>Seleccione Icono De La Tiendac</Form.Label>
                    <Form.Control type="file" size="sm" accept="image/*" onChange={(e)=>ImagenTienda(e.target.files[0])}/>
                </Form.Group>

            <Button variant="registro" type="submit" onClick={enviarDatos}>
                Registrar Tienda
            </Button>
        </Form>
    </Container>
     );
}

export default RegistroTienda;