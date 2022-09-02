import {linkStore} from "../store";
import {apiLinksGet} from "../api";

class LinkService {

    async getAll () {
        try {

            const {page, limit, sort} = linkStore

            const response = await apiLinksGet({page, limit, ...sort})

            linkStore.setTotalCount(response.data.paging.totalCount)
            linkStore.setTotalPage(response.data.paging.totalPage)
            linkStore.setLinks(response.data.items)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }
}

export const linkService = new LinkService()