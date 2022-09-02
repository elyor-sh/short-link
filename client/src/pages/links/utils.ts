import {ITableHeadCells} from "../../components/table/types";

export const linksTableHeadCells: ITableHeadCells[] = [
    {title: 'ID', field: '_id', type: 'text', align: 'left'},
    {title: 'Короткая ссылка', field: 'short', type: 'short-link', align: 'left'},
    {title: 'Исходная ссылка', field: 'target', type: 'link', align: 'left'},
    {title: 'Количество переходов', field: 'counter', type: 'text', align: 'left'},
]