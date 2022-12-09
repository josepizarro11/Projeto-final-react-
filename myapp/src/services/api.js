import axios from "axios";


const Api = axios.create({
    baseURL:"http://localhost:3004/",
})
 export default Api;
