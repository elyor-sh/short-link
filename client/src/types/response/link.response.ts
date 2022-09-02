import {LinkEntity} from "../../entities/link.entity";
import {PaginationType} from "./base.response";


export namespace LinkResponse {
    
    export interface Create {
        id: number
        short: string
        target: string
        counter: number
    }

    export interface Get {
        items: LinkEntity[],
        paging: PaginationType
    }
    
}