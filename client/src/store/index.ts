import {RegisterStore} from "./all/register";
import React from "react";
import {LoginStore} from "./all/login";
import {CurrentUserStore} from "./all/current-user";
import {LinkStore} from "./all/link";

export const registerStore = new RegisterStore()
export const loginStore = new LoginStore()
export const currentUserStore = new CurrentUserStore()
export const linkStore = new LinkStore()


export const createStore = () => ({
    registerStore,
    loginStore,
    currentUserStore,
    linkStore
});

export type TStore = ReturnType<typeof createStore>

export const StoresContext = React.createContext<TStore>(createStore());

