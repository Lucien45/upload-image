import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'content-type': 'multipart/form-data'
    },
});

export default Axios;