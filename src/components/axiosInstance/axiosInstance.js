import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://portfolio-d4b43-default-rtdb.firebaseio.com/',
})

export default axiosInstance