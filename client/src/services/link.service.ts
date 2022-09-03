import {linkCreateStore, linkStore} from "../store";
import {apiLinkCreate, apiLinksGet} from "../api";
import {toast} from "react-toastify";

class LinkService {

    async getAll () {
        try {

            const response = await apiLinksGet(linkStore.queryParams)

            linkStore.setTotalCount(response.data.paging.totalCount)
            linkStore.setTotalPage(response.data.paging.totalPage)
            linkStore.setLinks(response.data.items)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }

    async  create () {
        try {

            const response = await apiLinkCreate({link: linkCreateStore.link})

            toast.success('Ссылка создана успешно!', {toastId: 'create_link'})

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }
}

export const linkService = new LinkService()