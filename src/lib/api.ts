import axios from "axios";
import Cookies from "js-cookie";

const api = () => {
  const token = Cookies.get("token");
  return axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;
