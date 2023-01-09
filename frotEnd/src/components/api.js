import axios from 'axios';
const url = `http://localhost:3001/uploadImage`;
export const getItems = ()=>axios.get(url);
export const createItem = (item)=>axios.post(url,item);