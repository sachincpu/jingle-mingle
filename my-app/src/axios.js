import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jijinglemingle.herokuapp.com'
})

export default instance;