import axios from 'axios';

const base = axios.create({
    baseURL: 'http://localhost:8081/api/public/'
})

const inicarSesion = (datosParaEnviar) => {
    base.post("inicarsesion",datosParaEnviar)
}

const registrar = (datosParaEnviar) => {

}

const autocompletado = (params) => base.get("autocompletadocomics",{params});

const cargarComic = (datosParaEnviar)=> base.post("upload/comic",datosParaEnviar,{headers:{'Content-Type':'mulipart/form-data'}});

const obtenerListaComics = (params)=> base.get("allcomics",{params});

const totalComics = ()=> base.get("totalcomics")

const buscar = (params)=> base.get("comics",{params});

const paginasResultados = (params)=> base.get("busquedaPaginas",{params});

const ApiPublic = {
    cargarComic,
    autocompletado,
    obtenerListaComics,
    totalComics,
    buscar,
    paginasResultados
}

export default ApiPublic;