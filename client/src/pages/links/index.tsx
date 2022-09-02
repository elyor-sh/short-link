import React, {useEffect, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";
import {linkService} from "../../services/link.service";
import {Container} from "@mui/material";
import {linksTableHeadCells} from "./utils";
import {TablePro} from "../../components/table";


const LinksPage = observer(() => {

    const linkStore = useStore(store => store.linkStore)

    const headCells = useMemo(
        () => {
            return linksTableHeadCells
        }, []
    )

    useEffect(() => {
        (async () => {
            await linkService.getAll()
        })()
    }, [linkStore.page, linkStore.limit])

    return (
        <>
            <Container>
                <TablePro
                    headCells={headCells}
                    rows={linkStore.links}
                    page={linkStore.page}
                    setPage={linkStore.setPage}
                    rowsPerPage={linkStore.limit}
                    setRowsPerPage={linkStore.setLimit}
                    totalCount={linkStore.totalCount}
                />
            </Container>
        </>
    );
});

export {LinksPage}
