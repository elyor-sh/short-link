import React from "react";
import {StoresContext, TStore} from "../store";

const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
) => {
    const value = React.useContext(context);
    if (!value) {
        throw new Error();
    }
    const store = storeSelector(value);

    return dataSelector(store);
};

export const useStore = <Selection>(
    dataSelector: (store: TStore) => Selection
) =>
    useStoreData(StoresContext, contextData => contextData!, dataSelector);