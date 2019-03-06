import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-bruger-2710.firebaseio.com/'
});

export default instance;
