import React, {memo} from "react";
import {ITableHeadCells} from "./types";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {drawCell} from "./drawCell";
import {TablePaginationPro} from "./pagination";
import {TableHeadPro} from "./head";

interface TableProProps {
    headCells: ITableHeadCells[]
    rows: any[],
    totalCount: number
    page: number
    rowsPerPage: number
    setRowsPerPage: (p: number) => void
    setPage: (p: number) => void
}

export const TablePro: React.FC<TableProProps> = memo((
    {
        headCells,
        rows,
        totalCount,
        page,
        rowsPerPage,
        setRowsPerPage,
        setPage
    }
) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                headCells.map(cell => {
                                    return (
                                       <TableHeadPro cell={cell} key={cell.field} />
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    headCells.map(cell => {
                                        return (
                                            <TableCell
                                                key={cell.field}
                                                align={cell.align || 'left'}
                                                sx={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '300px'}}
                                            >
                                                {drawCell(row, cell)}
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePaginationPro
                    count={totalCount}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    setPage={setPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </TableContainer>
        </>
    );
})
