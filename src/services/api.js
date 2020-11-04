import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

//http://localhost:3333
// http://127.0.0.1:3333