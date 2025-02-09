import config from '../../config.json';
import axios from "axios";

export const apiFetch = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  }
});