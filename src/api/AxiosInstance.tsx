import axios from 'axios'
import { apiKey } from './ApiKey'

const BASE_URL = "https://api.spoonacular.com/"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        apiKey
    }
})