import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";
import {AuthForm} from "./form";
import {authService} from "../../services/auth.service";

const RegisterPage = observer(() => {

    const navigate = useNavigate()

    const registerStore = useStore(store => store.registerStore)

    const handleRegister = async () => {
        authService.register(registerStore.username, registerStore.password)
            .then(() => navigate('/login'))
    }

    return (
        <>
            <AuthForm
                title='Регистрация'
                handleSubmit={handleRegister}
                username={registerStore.username}
                password={registerStore.password}
                setUserName={registerStore.setUserName}
                setPassword={registerStore.setPassword}
                href='/login'
                linkTitle='Логин'
            />
        </>
    );
});

export {RegisterPage}
