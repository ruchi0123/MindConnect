import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Replace with your backend API URL

// Create an instance of Axios with a base URL
const api = axios.create({
  baseURL: API_URL,
});

// Function to register a user
export const registerUser = (userData) => {
  return api.post('/auth/register', userData);  // Send POST request to the '/auth/register' endpoint
};

// Function to login a user
export const loginUser = (userData) => {
  return api.post('/auth/login', userData);  // Send POST request to the '/auth/login' endpoint
};

// Function to save mood data
export const saveMood = (moodData) => {
  return api.post('/mood/add', moodData);  // Send POST request to the '/mood/add' endpoint
};

// Function to get all moods of a user
export const getMoods = (userId) => {
  return api.get(`/mood/${userId}`);  // Send GET request to the '/mood/{userId}' endpoint
};

export default api;
