import React from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";

const Header = observer(() => {

    const navigate = useNavigate()

    const currentUserStore = useStore(store => store.currentUserStore)

    const handleLogout = () => {
        currentUserStore.refresh()
        navigate('/login')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, mb: 10 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Сокращение ссылок
                        </Typography>
                        <IconButton sx={{color: '#fff'}} onClick={handleLogout}>
                            <LogoutOutlinedIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
});

export {Header}