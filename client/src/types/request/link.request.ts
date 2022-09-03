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

    export interface Filter {
        filterBy__id?: string
        filterBy_target?: string
        filterBy_short?: string
        filterBy_counter?: number | string
    }

    interface GetQuery extends BaseQuery {}

    export type Get = GetQuery & Filter & Sort
    
}