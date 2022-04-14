import axios from "axios";

const Api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    "content-type": "application/json",
  },
});

export default Api;
