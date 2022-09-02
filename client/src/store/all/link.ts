import {makeAutoObservable} from "mobx";
import {LinkEntity} from "../../entities/link.entity";
import {LinkRequest} from "../../types/request/link.request";

export class LinkStore {

    links: LinkEntity[] = []
    page: number = 1
    limit: number = 10
    totalCount: number = 1
    totalPage: number = 1
    sort: LinkRequest.Sort = {}

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
}