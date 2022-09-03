import React, {useEffect, useMemo} from 'react';
import { useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Button,  Grid} from "@mui/material";
import {useStore} from "../../hooks/useStore";
import {linkService} from "../../services/link.service";
import {linksFilterFields, linksInitialFilterState, linksTableHeadCells} from "./utils";
import {TablePro} from "../../components/table";
import Filter from "../../components/filter";


const LinksPage = observer(() => {

    const linkStore = useStore(store => store.linkStore)
    const navigate = useNavigate()

    const headCells = useMemo(
        () => {
            return linksTableHeadCells
        }, []
    )

    const initialFilterState = useMemo(
        () => {
            return linksInitialFilterState
        }, []
    )

    const filterFields = useMemo(
        () => {
            return linksFilterFields
        }, []
    )

    useEffect(() => {
        (async () => {
            navigate('?' + linkStore.query)
            await linkService.getAll()
        })()
    }, [linkStore.query])

    useEffect(() => {
        return () => {
            linkStore.refresh()
        }
    }, [])

    return (
        <>
                <Grid container justifyContent="flex-end">
                    <Button
                        variant="contained"
                        onClick={() => navigate('/links/create')}
                    >
                        Создать
                    </Button>
                </Grid>
                <Filter
                    filters={filterFields}
                    initialState={initialFilterState}
                    handleSearch={(p: typeof initialFilterState) => linkStore.handleFilters(p)}
                    handleClear={linkStore.handleClearFilters}
                />
                <TablePro
                    headCells={headCells}
                    rows={linkStore.links}
                    page={linkStore.page}
                    setPage={linkStore.setPage}
                    rowsPerPage={linkStore.limit}
                    setRowsPerPage={linkStore.setLimit}
                    totalCount={linkStore.totalCount}
                />
        </>
    );
});

export {LinksPage}
