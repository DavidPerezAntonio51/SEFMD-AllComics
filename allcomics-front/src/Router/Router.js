import { Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";
import CarroCompra from "../Paginas/CarroCompra";
import ListaComics from "../Paginas/ListaComics";
import ListaTiendas from "../Paginas/ListaTiendas";
import RegistroUsuario from "../Paginas/RegistroUsuario";
import RegistroComic from "../Paginas/RegistroComic";
import { PaymentProvier } from "../Contextos/PaymentContext";

function Rutas(props) {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="comics" element={<ListaComics/>}/>
                <Route path="comicsRegistro" element={<RegistroComic/>}/>
                <Route path="tiendas" element={<ListaTiendas/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="registro" element={<RegistroUsuario/>}/>
                <Route path="carrito" element={<PaymentProvier><CarroCompra/></PaymentProvier>}/>
            </Route>
        </Routes>
    );
}

export default Rutas;