import React, { MouseEvent, FC} from 'react';
import TablePagination from '@mui/material/TablePagination';

interface TablePaginationProProps {
    count: number
    page: number
    rowsPerPage: number
    setPage: (page: number) => void
    setRowsPerPage: (page: number) => void
}

export const TablePaginationPro: FC<TablePaginationProProps> = (
    {
        count,
        page,
        rowsPerPage,
        setPage,
        setRowsPerPage
    })  => {

    const handleChangePage = (
        event: MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    return (
        <TablePagination
            component="div"
            count={count}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100, 500]}
            labelRowsPerPage='Строк на странице'
        />
    );
}