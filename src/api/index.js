import axios from 'axios';
import { formatGallery } from '../utils';

const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

const fetchGallery = async (start, end) => {
  try {
    const { data } = await axios.get(`${baseURL}&start_date=${start}&end_date=${end}`);
    return formatGallery(data);
  } catch (error) {
    throw Error(`Error fetching gallery - ${error.message}`);
  }
};

export default fetchGallery;
