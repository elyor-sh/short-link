import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";
import {linkService} from "../../services/link.service";
import {Container} from "@mui/material";


const LinksPage = observer(() => {

    const linkStore = useStore(store => store.linkStore)

    useEffect(() => {
        (async () => {
            await linkService.getAll()
        })()
    }, [linkStore.page, linkStore.limit])

    return (
        <>
            <Container>

            </Container>
        </>
    );
});

export {LinksPage}
