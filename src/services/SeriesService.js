//This service will handle API calls to series endpoint
import axios from 'axios';

const API_URL = 'https://www.gunpladb.site/api/series';

export const seriesList = () => {
  return axios.get(API_URL + '/list');
};

export const seriesByName = async name => {
  try {
    const series = await seriesList();
    if (series) {
      return series.data.find(s => s.name === name);
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
