import axios from 'axios';
import './mock';

export default {
  Chart: () => axios.get('Chart.com'),
  getindex: () => axios.get('getindex.com'),
  Content: () => axios.get('Content.com'),
};
