import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.35:3000',
});

// porta 3000 para pc;
// porta 19003 para mobile
// sempre conferir ip
// executar json-server -H 191.52.55.35 -p 3000 server.json


export default api;