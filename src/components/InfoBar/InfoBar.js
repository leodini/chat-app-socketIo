import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import './InfoBar.css'

const InfoBar = (props) => {
    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="online" className="onlineIcon"/>
                <h3>{props.room}</h3>
            </div>
            <div className="RightInnerContainer">
                <a href="/">
                    <img src={closeIcon} alt="close"/>
                </a>
            </div>
        </div>
    );
}

export default InfoBar;