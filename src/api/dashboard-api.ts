import axios from 'axios'
import {ApiResponse} from "./types";

// api
export const dashboardAPI = {
  getData() {
    return axios.get<ApiResponse>('https://demotrainiq.com/case/dashboard');
  }
}