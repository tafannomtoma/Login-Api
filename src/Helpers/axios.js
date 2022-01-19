import axios from "axios";
import { api } from "./ConfigURL";




const axiosInstance = axios.create({
    baseURL: api
})

export default axiosInstance;