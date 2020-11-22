import React, { useState, useEffect } from 'react';
import '../scss/main.scss';
import Background from './background';
import Clock from './clock';
import Quote from './quote';

const Main = () => {

    return (
        <div className="main">
            <Quote />
            <Clock />
            <Background />
        </div>
    );
}

export default Main;