import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b8bbd69a2b2c483c99d5dabe3cc5792c'
    }
})

