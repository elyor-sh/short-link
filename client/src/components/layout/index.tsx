import React from 'react';
import {Outlet} from 'react-router-dom'
import {Container} from "@mui/material";

const Layout = () => {
    return (
        <>
            <header></header>
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <footer></footer>
        </>
    );
};

export {Layout}