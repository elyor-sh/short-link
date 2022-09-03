
export interface IFilterOptions {
    label: string
    value: string
}

export interface FilterProps {
    type: 'input' | 'select',
    inputType?: 'text' | 'number'
    name: string
    label: string
    options?: IFilterOptions[]
    width?: string
}