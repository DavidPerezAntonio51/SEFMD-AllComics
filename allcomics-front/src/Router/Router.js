import { Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home";
import Login from "../Paginas/Login";

function Rutas(props) {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="comics"/>
                <Route path="login" element={<Login/>}/>
            </Route>
        </Routes>
    );
}

export default Rutas;