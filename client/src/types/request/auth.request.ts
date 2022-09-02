export namespace AuthRequest {

  export interface Login {
     username: string
     password: string
     grant_type?: string
     scope?: string
     client_id?: string
     client_secret?: string
  }

   export interface Register {
      username: string
      password: string
   }

}