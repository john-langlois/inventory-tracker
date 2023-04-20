import React from 'react';
import './Hardware.css'

const HardwareList = ({category,name,serialNo}) =>{
    return (
        <div className ="track_row">
            <div className="header">
            <p>Category: {category}</p>
            <p>Name: {name}</p>
            <p> Serial Number:{serialNo}</p>
            </div>
        </div>
    )
}

export default HardwareList;