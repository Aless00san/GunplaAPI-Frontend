import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const login = async ({username, password}) => {
  try {
    const response = await api.post('/login', {
      username,
      password
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
