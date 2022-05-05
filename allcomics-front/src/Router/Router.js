import { Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home";

function Rutas(props) {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="Listado"/>
            </Route>
        </Routes>
    );
}

export default Rutas;