import api from '../api/axios';

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data.data; // Ambil array projects dari response
};
