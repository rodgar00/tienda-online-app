import axios from "axios";

// 10.0.2.2 -> localhost con android
// localhost o 127.0.0.1 -> localhost con otro SO que no sea android

const APITiendaOnline = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    }
})

export default APITiendaOnline;