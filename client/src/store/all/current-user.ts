import {makeAutoObservable} from "mobx";
import {UserEntity} from "../../entities/user.entity";

const user: UserEntity | null = localStorage.getItem('currentUser')
    ?
    JSON.parse(localStorage.getItem('currentUser') || '[]')
    :
    null

export class CurrentUserStore {

    currentUser: UserEntity | null = user ? {...user} : null
    token: string = ''

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setCurrentUser (current: UserEntity) {
        this.currentUser = current
        localStorage.setItem('currentUser',JSON.stringify(current))
    }

    setToken (p: string) {
        this.token = p
        localStorage.setItem('token', p)
    }

    refresh () {
        this.currentUser = null
        this.token = ''
        localStorage.clear()
    }
}