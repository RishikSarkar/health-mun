import React, { createContext, useState, useContext } from 'react';

const ManualContext = createContext();

export const useManual = () => {
    return useContext(ManualContext);
}

export const ManualProvider = ({ children }) => {
    const [manual, setManual] = useState(false);

    return (
        <ManualContext.Provider value={{ manual, setManual }}>
            {children}
        </ManualContext.Provider>
    );
}