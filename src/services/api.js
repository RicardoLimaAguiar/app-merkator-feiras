import axios from "axios";

const api = axios.create({
  baseURL: "https://api.paineldoexpositor.com.br/",
  headers: { Authorization: "Basic bWVya2F0b3I6RkQuc2pha2llMTI3MTIw" },
});

export default api;
