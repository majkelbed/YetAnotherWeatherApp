import axios from 'axios';

const API_KEY = "e49287bd-b52a-4dd9-b064-8406cc1fb851";
const baseURL = "https://api.airvisual.com/v2";
const searchParams = new URLSearchParams(`key=${API_KEY}`);

export async function getCountries() {
    const res = await axios.get(`${baseURL}/countries?${searchParams.toString()}`);
    return res;
}