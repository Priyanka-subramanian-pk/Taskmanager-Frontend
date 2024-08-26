import axios from 'axios';


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ2MDA0NDAsImV4cCI6MTcyNDY4Njg0MH0.75zrz41-A7D2B-F48ds_0tTeiZVNCss26E7HhYmty50"
const axiosInstance = axios.create({
  baseURL: "https://taskmanager-backend-nban.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "Authorization":`Bearer ${token}` 
  }
});

export default axiosInstance;
