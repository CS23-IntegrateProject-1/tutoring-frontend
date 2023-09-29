import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    // withCredentials: true,
});

export default Axios;