import axios from 'axios';

const uri = 'https://6866-2607-f470-6-3001-3cbe-40fb-e4c3-c7b2.ngrok.io/';

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
