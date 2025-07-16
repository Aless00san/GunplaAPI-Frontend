import axios from 'axios';

const API_URL = 'http://localhost:8080/';
const username = '';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const logout = async () => {
  try {
    const response = await api.post('/api/user/logout');
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const isAuthenticated = async () => {
  try {
    const response = await api.get('/api/user/auth', { withCredentials: true });
    return response;
  } catch (error) {
    return undefined;
  }
};

export const getRoles = u => {
  let roles = [];
  if (username != '') {
    roles = api.get(`/api/user/roles/${username}`, {
      withCredentials: true,
    });
  } else {
    if (u == '') {
      return undefined;
    }
    roles = api.get(`/api/user/roles/${u}`, {
      withCredentials: true,
    });
  }
  return roles;
};
