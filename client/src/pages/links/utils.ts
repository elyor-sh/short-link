import {ITableHeadCells} from "../../components/table/types";
import {linkStore} from "../../store";

export const linksTableHeadCells: ITableHeadCells[] = [
    {title: 'ID', field: '_id', type: 'text', align: 'left', sortClick: linkStore.setSort},
    {title: 'Короткая ссылка', field: 'short', type: 'short-link', align: 'left', sortClick: linkStore.setSort},
    {title: 'Исходная ссылка', field: 'target', type: 'link', align: 'left', sortClick: linkStore.setSort},
    {title: 'Количество переходов', field: 'counter', type: 'text', align: 'left', sortClick: linkStore.setSort},
]