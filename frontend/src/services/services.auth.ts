import { cookie } from "../variables";
import api from "./api";



export interface Login {
    email: string
    senha: string
}

export const authService = {
    async autenticarUsuario(data: Login) {
        return await api.post("auth/login", data)
    },

    setToken(data: any) {
        localStorage.setItem("token", data)
        cookie.set('token',data)
    },
    
    setUser(data: string) {
        cookie.set('user',data)
    },

    getToken() {
        return cookie.get('token')
    },
    
    getUser() {
        return cookie.get("user")
    },

    removeToken() {
        cookie.remove('token')
    },

    removeUser() {
        cookie.remove("user")
    }
}