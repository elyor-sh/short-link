import {ITableHeadCells} from "../../components/table/types";
import {linkStore} from "../../store";
import {FilterProps} from "../../components/filter/types";
import {LinkRequest} from "../../types/request/link.request";

export const linksTableHeadCells: ITableHeadCells[] = [
    {title: 'ID', field: '_id', type: 'text', align: 'left', sortClick: linkStore.setSort},
    {title: 'Короткая ссылка', field: 'short', type: 'short-link', align: 'left', sortClick: linkStore.setSort},
    {title: 'Исходная ссылка', field: 'target', type: 'link', align: 'left', sortClick: linkStore.setSort},
    {title: 'Количество переходов', field: 'counter', type: 'text', align: 'left', sortClick: linkStore.setSort},
]

export const linksFilterFields: FilterProps[] = [
    {name: 'filterBy__id', type: 'input', inputType: 'text', label: 'ID'},
    {name: 'filterBy_short', type: 'input', inputType: 'text', label: 'Короткая ссылка'},
    {name: 'filterBy_target', type: 'input', inputType: 'text', label: 'Исходная ссылка'},
    {name: 'filterBy_counter', type: 'input', inputType: 'number', label: 'Количество переходов'},
]

export const linksInitialFilterState: Required<LinkRequest.Filter> = {
    filterBy__id: '',
    filterBy_counter: '',
    filterBy_short: '',
    filterBy_target: ''
}