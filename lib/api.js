import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003/api', // Use the URL of your backend server
});

export const getApartments = async () => {
  try {
    const response = await api.get('/apartments');
    return response.data;
  } catch (error) {
    console.error('Error fetching apartments:', error);
    throw error;
  }
};

export const getApartmentById = async (id) => {
  try {
    const response = await api.get(`/apartments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching apartment ${id} details:`, error);
    throw error;
  }
};


export const postApartment = async (apartmentData) => {
    const response = await api.post('/apartments', apartmentData);
    return response.data;
  };
  
