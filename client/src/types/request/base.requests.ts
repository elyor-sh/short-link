
export type OrderType = 'asc_short' | 'asc_target' | 'asc_counter' | 'desc_short' | 'desc_target' | 'desc_counter'

export interface BaseQuery {
    limit?: number
    page?: number
    order?: OrderType[]
}