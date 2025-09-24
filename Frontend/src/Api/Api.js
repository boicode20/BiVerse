import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const baseURL  = import.meta.env.VITE_NODE_ENV === 'development'? BASE_URL : '/api'

export const Api = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
}) 