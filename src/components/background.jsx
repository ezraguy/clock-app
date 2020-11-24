import React, { useState, useEffect, useContext } from 'react';
import '../scss/background.scss';
import desktopDayTime from '../images/desktop/bg-image-daytime.jpg';
import desktopNightTime from '../images/desktop/bg-image-nighttime.jpg';
import tabletDayTime from '../images/tablet/bg-image-daytime.jpg';
import tabletNightTime from '../images/tablet/bg-image-nighttime.jpg';
import mobileDayTime from '../images/mobile/bg-image-daytime.jpg';
import mobileNightTime from '../images/mobile/bg-image-nighttime.jpg';
import { timeContext } from '../contexts/time-context'
const Background = () => {
    const [time, setTime] = useContext(timeContext);
    const [dayTime, setDayTime] = useState(true);
    const [screenSize, setScreenSize] = useState(0);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenSize(screenWidth)
    }

    const chooseBackground = async () => {
        const hours = time.substring(0, 2);
        if (hours > 18)
            setDayTime(false)
        else setDayTime(true);
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
    }, [time])
    return (

        <div className="background">
            <div className="backgroundImg-Wrap">

                {setBackground()}
            </div>
        </div>
    );
}

export default Background;