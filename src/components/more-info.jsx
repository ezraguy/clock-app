import React, { useState, useContext } from 'react';
import '../scss/more-info.scss';
import { MoreInfoContext } from '../context/more-info-context';

const MoreInfo = () => {
    const [moreInfo, setMoreInfo] = useContext(MoreInfoContext);

    return (

        <div className={!moreInfo ? 'more-info ' : 'more-info show-info'}>
            <div className="">
                <h3>dasdas</h3>
            </div>
        </div>

    );
}

export default MoreInfo;