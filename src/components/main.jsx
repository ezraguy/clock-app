import React, { useState, useEffect } from 'react';
import '../scss/main.scss';
import Background from './background';
import Quote from './quote';

const Main = () => {

    return (
        <div className="main">
            <Background />
            <Quote />
        </div>
    );
}

export default Main;