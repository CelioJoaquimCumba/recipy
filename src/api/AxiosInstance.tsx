import axios from 'axios'
import { app_key, app_id } from './ApiKey'

const BASE_URL = "https://api.edamam.com/api/recipes/v2/"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        app_key,
        app_id
    }
})