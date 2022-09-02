import {BaseQuery} from "./base.requests";


export namespace LinkRequest {


    
    export interface Create {
        link: string
    }

    export interface Sort {
        sortBy__id?: 1 | -1
        sortBy_target?: 1 | -1
        sortBy_short?: 1 | -1
        sortBy_counter?: 1 | -1
    }

    interface GetQuery extends BaseQuery {}
    interface GetSort extends GetQuery {}

    export interface Get extends GetSort {}
    
}