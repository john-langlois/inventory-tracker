import React from 'react';
import './Hardware.css'

const HardwareList = ({category,name,serialNo,hardwareId, remove}) =>{
    return (
        <div className ="track_row">
            <div className="header">
            <p>Category: {category}</p>
            <p>Name: {name}</p>
            <p> Serial Number:{serialNo}</p>
            <button className='loan-btn' value = {hardwareId} onClick={remove}>Remove Hardware</button>
            </div>
        </div>
    )
}

export default HardwareList;