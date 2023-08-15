import axios from 'axios';

const baseURL = 'https://your-api-endpoint.com';

export const getMenuItems = async () => {
    const response = await axios.get(`${baseURL}/menu`);
    return response.data;
};

// ...other API calls
