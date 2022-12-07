import axios from "axios"
export const COURSE_API = import.meta.env.VITE_COURSE_API
export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API

export const api = axios.create()
api.interceptors.response.use((res) => {
    return res.data
})
