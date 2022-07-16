import axios from "axios"

const doRequest = axios.create(
    {
        baseURL:"https://api.themoviedb.org/3"
    }
)
export default doRequest;