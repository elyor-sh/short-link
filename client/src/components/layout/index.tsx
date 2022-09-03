import React from 'react';
import {Outlet} from 'react-router-dom'
import {Container} from "@mui/material";
import {Header} from "./header";

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
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