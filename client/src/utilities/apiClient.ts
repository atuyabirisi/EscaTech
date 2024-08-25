import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'x-auth-token': `${localStorage.getItem("token")}`,
    },
});