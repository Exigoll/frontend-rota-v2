import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000", // заменить на 3002 для разработки
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
