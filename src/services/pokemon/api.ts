import Axios from "axios";

const API_BASEURL = "https://pokeapi.co/api/v2";

const api = Axios.create({
  baseURL: API_BASEURL,
});

export default api;
