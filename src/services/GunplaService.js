//This service will handle API calls to gunpla endpoint

import axios from 'axios';
import { api } from './AuthService';

const API_URL = 'https://www.gunpladb.site/api/gunpla';

const entry = {
  id: 0,
  name: '',
  grade: '',
  series: '',
};

export const mockEntry = () => {
  return entry;
};

export const gunplaList = (page = 0, size = 1000) => {
  return api.get(`api/gunpla/list?page=${page}&size=${size}`);
};

export const create = async ({ name, grade, series }) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/gunpla',
      {
        name,
        grade,
        series,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const update = async (id, gunpla) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/gunpla/${encodeURIComponent(id)}`,
      {
        name: gunpla.name,
        grade: gunpla.grade,
        series: gunpla.series,
      },
      {
        withCredentials: true,
      }
    );
    console.log('Gunpla updated', response);
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const deleteGunpla = async id => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/gunpla/${encodeURIComponent(id)}`,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
