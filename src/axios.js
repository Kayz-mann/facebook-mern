import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:9000"
    baseURL: "https://facebook-mern-server.herokuapp.com"
})

export default instance

