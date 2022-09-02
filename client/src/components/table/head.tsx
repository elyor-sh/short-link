import React, {useState} from "react";
import { TableCell, TableSortLabel} from "@mui/material";
import {ITableHeadCells} from "./types";

interface TableHeadProProps {
    cell: ITableHeadCells
}

export const TableHeadPro: React.FC<TableHeadProProps> = ({cell}) => {

    const [sort, setSort] = useState<1 | -1>(-1)

    const handleClick = () => {

        const newSort = sort === -1 ? 1 : -1

        cell.sortClick && cell.sortClick({['sortBy_' + cell.field] : newSort})

        setSort(newSort)
    }

    return (
        <TableCell
            align={cell.align || 'left'}
            onClick={handleClick}
        >
            <TableSortLabel
                direction={sort === -1 ? 'desc' : 'asc'}
            >
                <span>{cell.title}</span>
            </TableSortLabel>
        </TableCell>
    )
}