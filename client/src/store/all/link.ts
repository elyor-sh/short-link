import {makeAutoObservable} from "mobx";
import {LinkEntity} from "../../entities/link.entity";
import {LinkRequest} from "../../types/request/link.request";
import {stringify} from "query-string";

export class LinkStore {

    links: LinkEntity[] = []
    page: number = 1
    limit: number = 10
    totalCount: number = 1
    totalPage: number = 1
    sort: LinkRequest.Sort = {}
    filter: LinkRequest.Filter = {}

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setLinks (links: LinkEntity[]) {
        this.links = links
    }

    setPage (page: number) {
        this.page = page
    }

    setLimit (limit: number) {
        this.limit = limit
    }

    setTotalCount (count: number) {
        this.totalCount = count
    }

    setTotalPage (count: number) {
        this.totalPage = count
    }

    setSort (sort: LinkRequest.Sort) {
        this.sort = sort
    }

    setFilter (filter: LinkRequest.Filter) {
        this.filter = {
            ...this.filter,
            ...filter
        }
    }

    handleFilters (filter: Required<LinkRequest.Filter>) {

        let isEmpty = true

        Object.keys(filter).forEach((fil) => {
            if(filter[fil as keyof typeof filter]){
                isEmpty = false
                this.filter = {
                    ...this.filter,
                    [fil]: filter[fil as keyof typeof filter]
                }
            }
        })

        if(isEmpty){
            this.filter = {}
        }
    }

    handleClearFilters () {
        this.filter = {}
    }

    get query () {
        return stringify(
            {
                page: this.page,
                limit: this.limit,
                ...this.sort,
                ...this.filter
            }
        )
    }

    get queryParams (): LinkRequest.Get {
        return {
            page: this.page,
            limit: this.limit,
            ...this.sort,
            ...this.filter
        }
    }
}