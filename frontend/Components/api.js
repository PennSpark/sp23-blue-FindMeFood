import axios from 'axios';

const uri = 'https://1018-2607-f470-6-1001-fdb1-f158-3a72-a196.ngrok.io/';

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
