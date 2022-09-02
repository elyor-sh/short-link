
type IAlign = 'left' | 'right' | 'center'

export interface ITableHeadCells {
    align?: IAlign
    title: string
    field: string
    type: 'text' | 'link' | 'short-link'
    onClick?: (p: any) => void
    sortClick?: (p: any) => void
}