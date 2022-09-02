import {makeAutoObservable} from "mobx";

export class RegisterStore {

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