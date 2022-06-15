import axios from "axios";

const url = "http://localhost:5000/kimchi";

export const fetchKimches = () => axios.get(url);
