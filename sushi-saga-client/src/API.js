const baseURL = 'http://localhost:3001';
const sushiURL = baseURL + '/sushis';

const get = (url) => fetch(url).then((resp) => resp.json());

const getSushis = () => get(sushiURL);

export default {getSushis};
