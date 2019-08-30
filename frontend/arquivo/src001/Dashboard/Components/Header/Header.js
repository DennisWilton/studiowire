import React from 'react';
import './Header.scss';

import Logo from '../../../logo.png';

export default () => {
    return(
        <>
            <div className="wrapper">
                <div className="brand">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="navbar"></div>
            </div>
        </>
    )
}