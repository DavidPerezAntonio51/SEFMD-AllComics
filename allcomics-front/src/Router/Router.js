import { Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";
import CarroCompra from "../Paginas/CarroCompra";
import ListaComics from "../Paginas/ListaComics";
import ListaTiendas from "../Paginas/ListaTiendas";
import RegistroUsuario from "../Paginas/RegistroUsuario";

function Rutas(props) {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="comics" element={<ListaComics/>}/>
                <Route path="tiendas" element={<ListaTiendas/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="carrito" element={<CarroCompra/>}/>
                <Route path="registro" element={<RegistroUsuario/>}/>
            </Route>
        </Routes>
    );
}

export default Rutas;