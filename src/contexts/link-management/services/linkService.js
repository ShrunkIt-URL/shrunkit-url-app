import axios from "axios";

const BASE_URL = "http://localhost:5000/shortUrls";

export const getAllLinks = () => axios.get(BASE_URL);

export const createLink = (originalUrl) => {
  const shortCode = Math.random().toString(36).substring(2, 8); // Example: 'abc123'
  return axios.post(BASE_URL, {
    originalUrl,
    shortCode,
    createdAt: new Date().toISOString(),
  });
};
