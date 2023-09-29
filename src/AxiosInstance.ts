import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true,
});

export default Axios;