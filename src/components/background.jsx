import React, { useState, useEffect, useContext } from 'react';
import '../scss/background.scss';
import desktopDayTime from '../images/desktop/bg-image-daytime.jpg';
import desktopNightTime from '../images/desktop/bg-image-nighttime.jpg';
import tabletDayTime from '../images/tablet/bg-image-daytime.jpg';
import tabletNightTime from '../images/tablet/bg-image-nighttime.jpg';
import mobileDayTime from '../images/mobile/bg-image-daytime.jpg';
import mobileNightTime from '../images/mobile/bg-image-nighttime.jpg';
import { FullTimeContext } from '../context/full-time-context';

const Background = () => {
    const [fullTime, setFullTime] = useContext(FullTimeContext);
    const [dayTime, setDayTime] = useState(true);
    const [screenSize, setScreenSize] = useState(0);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenSize(screenWidth)
    }

    const chooseBackground = async () => {
        const hours = fullTime.substring(0, 2);
        if ((hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 24))
            setDayTime(false)
        else
            if ((hours >= 5 && hours <= 11) || (hours >= 12 && hours <= 17))
                setDayTime(true);
    }

    const setBackground = () => {
        if (screenSize > 1000 && dayTime) return <img src={desktopDayTime} className="backgroundImg" alt="" />;
        if (screenSize > 1000 && !dayTime) return <img src={desktopNightTime} className="backgroundImg" alt="" />;
        if (screenSize <= 1000 && screenSize > 600 && dayTime) return <img src={tabletDayTime} className="backgroundImg" alt="" />;
        if (screenSize < 1000 && screenSize > 600 && !dayTime) return <img src={tabletNightTime} className="backgroundImg" alt="" />;
        if (screenSize <= 600 && dayTime) return <img src={mobileDayTime} className="backgroundImg" alt="" />;
        if (screenSize <= 600 && !dayTime) return <img src={mobileNightTime} className="backgroundImg" alt="" />;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        chooseBackground();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [fullTime])
    return (

        <div className="background">
            <div className="backgroundImg-Wrap">

                {setBackground()}
            </div>
        </div>
    );
}

export default Background;