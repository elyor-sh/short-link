import {AuthRequest} from "../types/request/auth.request";
import {apiAuthLogin, apiAuthRegister} from "../api";
import {currentUserStore} from "../store";

class AuthService {

    async login (username: string, password: string) {
        try {

            const params: AuthRequest.Login = {
                username, password
            }

            const response = await apiAuthLogin(params)

            currentUserStore.setCurrentUser({username})

            currentUserStore.setToken(response.data.access_token)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }

    async register (username: string, password: string) {
        try {

            const params: AuthRequest.Register = {
                username, password
            }

            const response = await apiAuthRegister(params)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }
}

export const authService = new AuthService()