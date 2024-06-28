import axios from "axios";
const apiRequest = axios.create({
  // baseURL: "http://localhost:8080/api/",
  baseURL: "https://real-estate-jxqx.onrender.com/",
  withCredentials: true,
});

export default apiRequest;
