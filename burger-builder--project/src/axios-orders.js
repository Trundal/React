import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-test-burger.firebaseio.com/'
})

export default instance;