import React from "react";
import {RegisterStore} from "./all/register";
import {LoginStore} from "./all/login";
import {CurrentUserStore} from "./all/current-user";
import {LinkStore} from "./all/link";
import {LinkCreateStore} from "./all/link-create";

export const registerStore = new RegisterStore()
export const loginStore = new LoginStore()
export const currentUserStore = new CurrentUserStore()
export const linkStore = new LinkStore()
export const linkCreateStore = new LinkCreateStore()


export const createStore = () => ({
    registerStore,
    loginStore,
    currentUserStore,
    linkStore,
    linkCreateStore
});

export type TStore = ReturnType<typeof createStore>

export const StoresContext = React.createContext<TStore>(createStore());

