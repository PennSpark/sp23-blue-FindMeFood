import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // replace with your Django server address
});


export const postFormData = async (address, data) => {
  try {
    const response = await api.post(String(address), data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getFormData = async (address) => {
  try {
    const response = await api.get(String(address));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
