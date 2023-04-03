import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // replace with your Django server address
});


export const postFormData = async (data) => {
  try {
    console.log("hi")
    console.log(data)
    const response = await api.post('/post-data/', data);
    return response.data;
  } catch (error) {
    console.log("bye")
    console.error(error.message);
  }
};

export const getFormData = async () => {
  try {
    const response = await api.get('/get-data/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
