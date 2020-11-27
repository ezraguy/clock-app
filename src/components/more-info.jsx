import React, { useState, useContext } from 'react';
import '../scss/more-info.scss';
import { MoreInfoContext } from '../context/more-info-context';
import { LocationContext } from '../context/location-context';
import { TimeContext } from '../context/time-context';

const MoreInfo = () => {
    const [moreInfo, setMoreInfo] = useContext(MoreInfoContext);
    const [location, setLocaiton] = useContext(LocationContext);
    const [time, setTime] = useContext(TimeContext);

    return (

        <div className={!moreInfo ? 'more-info ' : 'more-info show-info'}>
            <div className="content-wrap">
                <div className="content">
                    <div className="timezone">
                        <p className="label">Current timezone</p>
                        <p className="text">{location.time_zone}</p>
                    </div>
                    <div className="day-of-year">
                        <p className="label">day of the year</p>
                        <p className="text">{time.day_of_year}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MoreInfo;