import axios from 'axios';

export const axiosLocal = axios.create({ headers: { 'Content-Type': 'application/json'}, });