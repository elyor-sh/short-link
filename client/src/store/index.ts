import {RegisterStore} from "./all/register";
import React from "react";
import {LoginStore} from "./all/login";
import {CurrentUserStore} from "./all/current-user";

export const registerStore = new RegisterStore()
export const loginStore = new LoginStore()
export const currentUserStore = new CurrentUserStore()



export const createStore = () => ({
    registerStore,
    loginStore,
    currentUserStore
});

export type TStore = ReturnType<typeof createStore>

export const StoresContext = React.createContext<TStore>(createStore());

