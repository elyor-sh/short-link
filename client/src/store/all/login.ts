import {makeAutoObservable} from "mobx";

export class LoginStore {

    username: string = ''
    password: string = ''

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setUserName (username: string) {
        this.username = username
    }

    setPassword (password: string) {
        this.password = password
    }
}