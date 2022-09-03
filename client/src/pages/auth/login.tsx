import React from 'react';
import {useNavigate} from "react-router-dom";
import {useStore} from "../../hooks/useStore";
import {authService} from "../../services/auth.service";
import {AuthForm} from "./form";
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {

    const navigate = useNavigate()

    const loginStore = useStore(store => store.loginStore)

    const handleLogin = async () => {
        authService.login(loginStore.username, loginStore.password)
            .then(() => {
                loginStore.setUserName('')
                loginStore.setPassword('')
                navigate('/links')
            })
    }

    return (
        <>
            <AuthForm
                title='Логин'
                handleSubmit={handleLogin}
                username={loginStore.username}
                password={loginStore.password}
                setUserName={loginStore.setUserName}
                setPassword={loginStore.setPassword}
                href='/register'
                linkTitle='Регистрация'
            />
        </>
    );
});

export {LoginPage}
