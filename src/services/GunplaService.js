//This service will handle API calls to gunpla endpoint

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/gunpla';

const entry = {
  id: 0,
  name: '',
  grade: '',
  series: '',
};

//Fetch from API localhost:8080//api/gunpla/list
export const jsonList = async () => {
  try {
    const response = await axios.get(API_URL + '/list');
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [{ id: 0, name: '', grade: '', serie: '' }];
};

export const mockEntry = () => {
  return entry;
};

export const gunplaList = () => {
  return axios.get(API_URL + '/list');
};

const token = 'JWT_TOKEN_GOES_HERE';

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
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
