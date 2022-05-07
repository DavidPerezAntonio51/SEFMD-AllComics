import axios from 'axios';

const base = axios.create({
    baseURL: 'http'
})

const inicarSesion = (datosParaEnviar) => {
    base.post("/inicarsesion",datosParaEnviar)
}

const registrar = (datosParaEnviar) => {

}

const ApiPublic = {
}

export default ApiPublic;