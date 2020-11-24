import React, { createContext, useState } from 'react';

export const timeContext = createContext();

export const TimeProvider = props => {
    const [time, setTime] = useState('')
    return (
        <timeContext.Provider value={[time, setTime]}>
            {props.children}
        </timeContext.Provider>
    );
}