import React from 'react';
import Navbar from '../../Navbar/Navbar'
import DisplayItems from './DisplayItems';
import DisplayHardware from './DisplayHardware';
import './Hardware.css'

const HardwareInventory = ()=>{
    return(
        <>
    <Navbar/>
        <div className='float-container'>        
            <DisplayItems className = "float-child-1"/>
            <DisplayHardware className = "float-child"/>
        </div>
        </>
    )
}

export default HardwareInventory;