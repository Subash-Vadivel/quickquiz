import axios from "axios";
// https://quick-quiz.onrender.com
const BASE_URL="http://localhost:5500";
// const BASE_URL="https://quick-quiz.onrender.com";
export default axios.create({
    baseURL:BASE_URL

})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
    // withCredentials: true
});