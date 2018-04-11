import React from 'react';

import classes from './Logo.css';
import LogoImage from '../../assets/img/logo-227x66.png';

const navBarLogo = () => (
    <div className={classes.Logo}>
        <a href="https://www.agentur-brandung.de"><img src={LogoImage} className={classes.LogoImg} /></a>
    </div>
);

export default navBarLogo;