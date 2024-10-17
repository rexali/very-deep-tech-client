'use client'

import * as React from 'react';
import reducer from '../store/reducers/waqf-reducer';

const initialState = {
    waqfs: [],
    result: {}
};

const WaqfContext = React.createContext<any>(null);

const WaqfProvider = ({ children }: { children: any }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <WaqfContext.Provider value={{ state, dispatch }}>
            {children}
        </WaqfContext.Provider>
    );
};

export {
    WaqfProvider,
    WaqfContext
};
