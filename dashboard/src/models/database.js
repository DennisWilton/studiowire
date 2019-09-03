import axios from 'axios';

export const API_HOST = `http://192.168.0.17:8080`;

export const query = async (q = "") => {
    const url = `${API_HOST}/${q}`;
    const result = await axios(url);
    return result;
}

export const post = async (q, credentials) => {
    const url = `${API_HOST}/${q}`;
    const result = await axios.post(url, credentials);
    return result;
}