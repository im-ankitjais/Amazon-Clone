import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-be58b/us-central1/api'
    // 'https://us-central1-clone-be58b.cloudfunctions.net/api' 
    // 'http://localhost:5001/clone-be58b/us-central1/api' 
    // http://localhost:5001/clone-be58b/us-central1/api
    // the API (cloid function) URL
});

export default instance;