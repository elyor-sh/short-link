import {BaseQuery} from "./base.requests";


export namespace LinkRequest {


    
    export interface Create {
        link: string
    }

    export interface Get extends BaseQuery {}
    
}