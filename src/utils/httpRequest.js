import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);

    return response.data;
};

export const post = async (path, roleName) => {
    const response = await httpRequest.post(path, roleName);

    return response.data;
};

export const put = async (path, options = {}) => {
    const response = await httpRequest.put(path, options);

    return response.data;
};

export const deleteRequest = async (path) => {
    const response = await httpRequest.delete(path);

    return response.data;
};

export default httpRequest;
