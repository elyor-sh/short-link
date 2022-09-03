import {makeAutoObservable} from "mobx";
import {validateLink} from "../../utils/validation";

export class LinkCreateStore {

    link: string = ''
    isPrint: boolean = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setLink (link: string) {
        this.isPrint = true
        this.link = link
    }

    setIsPrint (p: boolean) {
        this.isPrint = p
    }

    get validLink () {
        if(!this.isPrint){
            return true
        }
        return validateLink(this.link)
    }
}