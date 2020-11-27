import React, { useState, useContext, useEffect } from 'react';
import '../scss/more-info.scss';
import { LocationContext } from '../context/location-context';
import { TimeContext } from '../context/time-context';
import { FullTimeContext } from '../context/full-time-context';

const MoreInfo = () => {
    const [location] = useContext(LocationContext);
    const [time] = useContext(TimeContext);
    const [fullTime] = useContext(FullTimeContext);
    const [dayStyle, setDayStyle] = useState(true);
    useEffect(() => {
        const hours = fullTime.substring(0, 2);
        if (hours >= 18)
            setDayStyle(false)
        else
            setDayStyle(true);



    }, [fullTime])
    return (

        <div className={!dayStyle ? 'more-info night' : 'more-info'}>
            <div className="content-wrap">
                <div className="content">
                    <div className="left-panel">
                        <div className="timezone">
                            <p className="label">Current timezone</p>
                            <p className="text">{location.time_zone}</p>
                        </div>
                        <div className="day-of-year">
                            <p className="label">day of the year</p>
                            <p className="text">{time.day_of_year}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="right-panel">

                        <div className="day-of-week">
                            <p className="label">day of the week</p>
                            <p className="text">{time.day_of_week}</p>
                        </div>
                        <div className="week-number">
                            <p className="label">week number</p>
                            <p className="text">{time.week_number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MoreInfo;