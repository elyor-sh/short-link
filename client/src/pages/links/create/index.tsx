import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks/useStore";
import {Button, Grid, TextField} from "@mui/material";
import {linkService} from "../../../services/link.service";
import {useNavigate} from "react-router-dom";

const LinkCreatePage = observer(() => {

    const linkCreateStore = useStore(store => store.linkCreateStore)
    const navigate = useNavigate()

    const handleSave = async () => {
        try {

            linkCreateStore.setIsPrint(true)

            if(!linkCreateStore.validLink){
                return
            }

            await linkService.create()

            linkCreateStore.setLink('')
            linkCreateStore.setIsPrint(false)

            navigate(-1)

        }catch (e) {

        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Введите ссылку"
                    value={linkCreateStore.link}
                    onChange={(e) => linkCreateStore.setLink(e.target.value)}
                    size="small"
                    sx={{height: '40px'}}
                    error={!linkCreateStore.validLink}
                    helperText={linkCreateStore.validLink ? '' : 'Невалидная ссылка'}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    sx={{height: '40px', background: '#bebebe', '&:hover' : {background: '#fa7070'}}}
                    onClick={() => navigate(-1)}
                >
                    Отмена
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    sx={{height: '40px'}}
                    onClick={handleSave}
                >
                    Сохранить
                </Button>
            </Grid>
        </Grid>
    );
});

export {LinkCreatePage}