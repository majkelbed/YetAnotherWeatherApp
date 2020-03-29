import axios from 'axios';
import { API_KEY } from './KEY'

const baseURL = "https://api.airvisual.com/v2";
const searchParams = new URLSearchParams(`key=${API_KEY}`);

export async function getCountries() {
    const res = await axios.get(`${baseURL}/countries?${searchParams.toString()}`);
    return res;
}