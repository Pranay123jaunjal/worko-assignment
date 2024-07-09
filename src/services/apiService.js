import axios from 'axios';

const apiService = {
  getReferrals: () => {
    return axios.get('https://api.example.com/referrals');
  },
  getServices: () => {
    return axios.get('https://api.example.com/services');
  }
};

export default apiService;
