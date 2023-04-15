import axios from 'axios';

const uri = 'https://f991-2607-f470-6-1001-c992-89cd-d15d-d4a8.ngrok.io/';

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
    console.log(address)
    const response = await api.get(String(address));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
