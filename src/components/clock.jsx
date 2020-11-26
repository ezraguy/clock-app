import React, { useState, useEffect, useContext } from 'react';
import '../scss/clock.scss';
import { getTime } from '../services/world-time-service.js';
import { getLocation } from '../services/location-service.js';
import sun from '../icons/icon-sun.svg';
import moon from '../icons/icon-moon.svg';
import Loader from '../utils/loader.jsx';
import arrow from '../icons/icon-arrow-up.svg';
import { TimeContext } from '../context/time-context'
import { LocationContext } from '../context/location-context';
import { MoreInfoContext } from '../context/more-info-context';


const Clock = () => {
    const [time, setTime] = useContext(TimeContext);
    const [dayState, setDayState] = useState('');
    const [abbreviation, setAbbreviation] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [arrowUp, setArrowUp] = useState(false);
    const [location, setLocation] = useContext(LocationContext);
    const [moreInfo, setMoreInfo] = useContext(MoreInfoContext);

    const getTimeData = async (ip) => {
        const timeData = await getTime(ip);
        const unixTime = timeData.unixtime;
        const currentTime = new Date(unixTime * 1000);
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        let fulltime = `${hours}:${minutes}`;
        calcTimeOfDay(hours);
        setTime(fulltime)
        setAbbreviation(timeData.abbreviation)
        setLoading(false)
    }
    const getLocationData = async () => {
        const locationData = await getLocation();
        setCountry(locationData.country_code);
        setCity(locationData.city);
        getTimeData(locationData.ip);
        setLocation(locationData);
    }
    const calcTimeOfDay = (hours) => {
        let timeOfDay = '';
        if (hours >= 0 && hours <= 4) timeOfDay = 'night'
        if (hours >= 5 && hours <= 11) timeOfDay = 'morning'
        if (hours >= 12 && hours <= 17) timeOfDay = 'afternoon'
        if (hours >= 18 && hours <= 24) timeOfDay = 'night'
        setDayState(timeOfDay);
    }

    const handleInfoClick = () => {
        setArrowUp(!arrowUp);
        setMoreInfo(!moreInfo)

    }
    useEffect(() => {
        getLocationData();

    }, [])
    return (



        <div className="clock">
            {loading ? <Loader /> :
                <React.Fragment>

                    <div className="greetings-wrap">

                        <p className="greetings"><span>
                            {dayState !== 'night' ? <img src={sun} alt="time icon" className="time-icon" /> : <img src={moon} alt="time icon" className="time-icon" />}
                        </span>good {dayState}, it's currently</p>
                    </div>

                    <div className="time-wrap">


                        <p className="time">{time} <span className="abbreviation">{abbreviation}</span></p>

                        <div className="location-wrap">
                            <p className="location">
                                In {city},{country}
                            </p>
                            <div className="see-more-wrap">

                                <button
                                    onClick={handleInfoClick} className="see-more-btn">{arrowUp ? 'less' : 'more'}<img src={arrow} alt="arrow" className={arrowUp ? 'arrow arrow-down' : 'arrow arrow-up'} /></button>
                            </div>
                        </div>

                    </div>
                </React.Fragment>
            }

        </div>















    );
}

export default Clock;