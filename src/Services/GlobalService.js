import axios from "axios";
export default {
  login: (data) =>
    axios({
      method: "POST",
      url: "https://www.wonapp.co/login",
      data: data,
    }),

  getProducts: (page = 1, per_page = 6) =>
    axios({
      method: "GET",
      url: `https://www.wonapp.co/products/search?page=${page}&per_page=${per_page}`,
    }),
};
