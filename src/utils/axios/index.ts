import axios from "axios";

const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL: "http://rotazap.ru",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const instanceAuth = axios.create({
  baseURL: "http://rotazap.ru",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${token}`,
  },
});

export const abcpApi = axios.create({
  baseURL: "https://64769b229233e82dd53a2b97.mockapi.io",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

/* Example */
export const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko/api/v3",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});
