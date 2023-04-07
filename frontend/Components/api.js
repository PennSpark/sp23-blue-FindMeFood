import axios from 'axios';

const uri = 'https://a984-2607-f470-6-1001-8548-d3d9-840a-8312.ngrok.io/';

const api = axios.create({
  baseURL: uri, // replace with your Django server address
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
