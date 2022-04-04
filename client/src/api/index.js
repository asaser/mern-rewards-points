import axios from 'axios';

// url pointing our backend path
const url = 'http://localhost:8000/users';

// take to http request from axios our backend url
export const fetchUsers = () => axios.get(url);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);
