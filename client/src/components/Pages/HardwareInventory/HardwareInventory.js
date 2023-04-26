import React from 'react';
import Navbar from '../../Navbar/Navbar'
import DisplayHardware from './DisplayHardware';
import './Hardware.css'

const HardwareInventory = ()=>{
    return(
        <>
    <Navbar/>
            <DisplayHardware className = "float-child"/>
        </>
    )
}

export default HardwareInventory;