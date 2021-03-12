import axios from "axios";
const SERVER_URL = "http://ideadeploy.space";

export const api = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
  },
});
api.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${window.localStorage.getItem(
    "AUTH_TOKEN"
  )}`;
  return request;
});

export class BaseService {
  static BASE_URL = "";
  static async http(method, url, data, options) {
    const response = await api.request({
      method,
      url: `${SERVER_URL}${this.BASE_URL}${url}`,
      data,
      ...options,
    });
    return response;
  }

  static get(url, data, options) {
    return this.http("GET", url, data, options);
  }

  static post(url, data, options) {
    return this.http("POST", url, data, options);
  }

  static put(url, data, options) {
    return this.http("PUT", url, data, options);
  }

  static post(url, data, options) {
    return this.http("DELETE", url, data, options);
  }
}
