import React from 'react'
import {Outlet} from 'react-router-dom'
import {CssBaseline, Grid,} from "@mui/material";

const AuthPage = () => {
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcclean.io%2Fwp-content%2Fuploads%2F2020%2F4%2FryuA7r.jpg&f=1&nofb=1)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Outlet />
            </Grid>
        </>
    );
};

export default AuthPage;
