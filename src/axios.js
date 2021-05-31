import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        auth: "Simple Auth"
    },
    // timeout: 3000,

})