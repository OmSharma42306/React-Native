import axios from "axios";


const API = axios.create({
    baseURL : `http://192.168.29.226:3000/user`,
    headers : {
        "Content-Type": "application/json"
    },
})

export default API;