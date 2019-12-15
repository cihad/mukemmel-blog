const env = process.env.NODE_ENV || 'development';

export const BASE_URL = env === "production" ? process.env.BASE_URL : "http://localhost:3000/"
export const API_BASE = env === "production" ? process.env.API_BASE : "http://localhost:3000/api"