
type IAlign = 'left' | 'right' | 'center'

export interface ITableRowCells {
    align?: IAlign
    param: string
    key: 'text'
}

export interface ITableHeadCells {
    align?: IAlign
    title: string
}