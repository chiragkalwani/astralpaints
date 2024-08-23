import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://astralpaints.kwebmakerdigitalagency.com/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
