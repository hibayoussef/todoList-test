// eslint-disable-next-line import/no-self-import
import axios from "axios";
import authHeader from "../services/auth-header";

export const Xaxios = axios.create();

Xaxios.defaults.headers.common["Content-Type"] = "application/json";
// Xaxios.defaults.headers.common.Accept = "application/json";
// Xaxios.defaults.headers.common["Accept-Language"] = "en";
// Xaxios.defaults.headers.common["lang"] = "en";
Xaxios.defaults.headers.common.Authorization = authHeader();

export const setTokenHeader = (token) => {
  Xaxios.defaults.headers.common.Authorization = authHeader();
};
