import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.1.152:3333'
});

//'http://192.168.1.152:3333' Android
//'http://localhost:3333' IOS