import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.35:3000',
});

// porta 3000 para pc;
// porta 19003 para 
// sempre conferir ip

export default api;