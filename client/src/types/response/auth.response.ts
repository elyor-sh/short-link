export namespace AuthResponse {

    export interface Login {
        access_token: string,
        token_type: string
    }

    export interface Register {
        username: string
    }

}