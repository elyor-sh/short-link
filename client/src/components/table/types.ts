
type IAlign = 'left' | 'right' | 'center'

export interface ITableRowCells {
    align?: IAlign
    param: string
    key: 'text'
}

export interface ITableHeadCells {
    align?: IAlign
    title: string
    field: string
    type: 'text' | 'link' | 'short-link'
    onClick?: (p: any) => void
}