import React from 'react';

import './SideDrawer.css';

// Route imports for nav

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href="#About" onClick={props.click}>About</a>
                </li>
                <li>
                    <a href="#Projects" onClick={props.click}>Projects</a>
                </li>
                <li>
                    <a href="#Contact" onClick={props.click}>Contact</a>
                </li>
            </ul>
        </nav>
    )
};

export default sideDrawer; 