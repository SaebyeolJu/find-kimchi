import axios from "axios";

const API_URL = "http://localhost:5000";
const API = axios.create({ baseURL: API_URL });

const Kimchi_API_URL = "/kimchi/";

const SearchKimchi = async (name) => {
  API.get(`${Kimchi_API_URL}${name}`);

  const response = await axios.get(Kimchi_API_URL);
  return response.data;
};

const kimchiService = {
  SearchKimchi,
};

export default kimchiService;
