const env = process.env.NODE_ENV || 'development';

export const BASE_URL = env === "production" ? process.env.BASE_URL : "http://localhost:3000/"
export const API_BASE = env === "production" ? process.env.API_BASE : "http://localhost:3000/api"
export const SECRET_KEY = env === "production" ? process.env.SECRET_KEY : "2fdea1259c6660852864f9726616df64c8cd"
export const ENCRYPTED_PASSWORD = env === "production" ? process.env.ENCRYPTED_PASSWORD : "U2FsdGVkX1+6awPLa9NN+MAVd7DYUZkM+t46M1uJAUw="