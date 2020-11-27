import React, { useContext } from 'react';
import '../scss/main.scss';
import Background from './background';
import Clock from './clock';
import MoreInfo from './more-info';
import Quote from './quote';
import { MoreInfoContext } from '../context/more-info-context';

const Main = () => {
    const [moreInfo, setMoreInfo] = useContext(MoreInfoContext);

    return (
        <div className={moreInfo ? "main slide-up" : "main"}>
            <Background />
            <Quote />
            <Clock />
            <MoreInfo />
        </div>
    );
}

export default Main;