import React, { useState, useEffect } from 'react';
import '../scss/background.scss';
import desktopDayTime from '../images/desktop/bg-image-daytime.jpg';
import desktopNightTime from '../images/desktop/bg-image-nighttime.jpg';
import tabletDayTime from '../images/tablet/bg-image-daytime.jpg';
import tabletNightTime from '../images/tablet/bg-image-nighttime.jpg';
import mobileDayTime from '../images/mobile/bg-image-daytime.jpg';
import mobileNightTime from '../images/mobile/bg-image-nighttime.jpg';
const Background = () => {
    const [backgroundImg, setBackgroundImg] = useState('');
    const [dayTime, setDayTime] = useState(false);
    const [screenSize, setScreenSize] = useState(0);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenSize(screenWidth)
    }
    const setBackground = () => {
        if (screenSize > 1000 && dayTime) return <img src={desktopDayTime} className="backgroundImg" alt="" />;
        if (screenSize > 1000 && !dayTime) return <img src={desktopNightTime} className="backgroundImg" alt="" />;
        if (screenSize < 1000 && screenSize > 600 && dayTime) return <img src={tabletDayTime} className="backgroundImg" alt="" />;
        if (screenSize < 1000 && screenSize > 600 && !dayTime) return <img src={tabletNightTime} className="backgroundImg" alt="" />;
        if (screenSize <= 600 && dayTime) return <img src={mobileDayTime} className="backgroundImg" alt="" />;
        if (screenSize <= 600 && !dayTime) return <img src={mobileNightTime} className="backgroundImg" alt="" />;
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (

        <div className="background">
            <div className="backgroundImg-Wrap">

                {setBackground()}
            </div>
        </div>
    );
}

export default Background;