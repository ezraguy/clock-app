import React, { createContext, useState } from 'react';

export const FullTimeContext = createContext();

export const FullTimeProvider = props => {
    const [fullTime, setFullTime] = useState('')
    return (
        <FullTimeContext.Provider value={[fullTime, setFullTime]}>
            {props.children}
        </FullTimeContext.Provider>
    );
}