import axios from "axios";

const axiosInstance = axios.create({
// local instance of firebase functions
    // baseURL :'http://127.0.0.1:5001/clone-2fb4a/us-central1/api'

    // deployed version of Amazon server on render.com
    baseURL :'https://amazon-back-end-api.onrender.com'
});

export { axiosInstance };
