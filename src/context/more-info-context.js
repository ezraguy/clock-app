import React, { createContext, useState } from 'react';

export const MoreInfoContext = createContext();

export const MoreInfoProvider = props => {
    const [moreInfo, setMoreInfo] = useState(true)
    return (
        <MoreInfoContext.Provider value={[moreInfo, setMoreInfo]}>
            {props.children}
        </MoreInfoContext.Provider>
    );
}