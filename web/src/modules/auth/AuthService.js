import BaseAxiosInstance from '../../libs/axios/BaseAxiosInstance';

const apiUrl = '/auth';

export default {
  login(form) {
    return BaseAxiosInstance.post(`${apiUrl}/login`, form);
  },
  signup(form) {
    return BaseAxiosInstance.post(`${apiUrl}/signup`, form);
  },
};
