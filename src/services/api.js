import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.19:19003',
});

// porta 3000 para pc;
// porta 19003 para mobile
// sempre conferir ip
// executar json-server -H 191.52.55.19 -p 19001 server.json


export default api;