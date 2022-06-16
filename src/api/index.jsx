import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchKimches = () => API.get(`/kimch`);
export const fetchKimch = (name) => API.get(`/kimch/${name}`);
