import React, { useState, useEffect } from 'react';
import '../scss/background.scss';
import desktopDayTime from '../images/desktop/bg-image-daytime.jpg';
import desktopNightTime from '../images/desktop/bg-image-nighttime.jpg';
import tabletDayTime from '../images/tablet/bg-image-daytime.jpg';
import tabletNightTime from '../images/tablet/bg-image-nighttime.jpg';
import mobileDayTime from '../images/mobile/bg-image-daytime.jpg';
import mobilenightTime from '../images/mobile/bg-image-nighttime.jpg';
const Background = () => {
    const [backgroundImg, setBackgroundImg] = useState('');
    const [dayTime, setDayTime] = useState(true);
    const [screenSize, setScreenSize] = useState(0);
    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenSize(screenWidth)
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

                {screenSize > 1000 && dayTime &&
                    <img src={desktopDayTime} className="backgroundImg" alt="" />
                }
                {screenSize > 1000 && !dayTime &&
                    <img src={desktopNightTime} className="backgroundImg" alt="" />
                }
                {screenSize < 1000 && screenSize > 600 && dayTime &&
                    <img src={tabletDayTime} className="backgroundImg" alt="" />
                }
                {screenSize < 1000 && screenSize > 600 && !dayTime &&
                    <img src={tabletDayTime} className="backgroundImg" alt="" />
                }
                {screenSize <= 600 && dayTime &&
                    <img src={mobileDayTime} className="backgroundImg" alt="" />
                }
                {screenSize <= 600 && !dayTime &&
                    <img src={mobileDayTime} className="backgroundImg" alt="" />
                }
            </div>
        </div>
    );
}

export default Background;