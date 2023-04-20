//Page that shows list of all of the available hardware
import { React } from 'react';
import HardwareList from './HardwareList';
import './Hardware.css';

function DisplayHardware() {
    return(
        <div>
            {/* Fetch needs to be implemented to display each Hardware List item */}
            <div className='hardware-grid'>
                <div className ="hardware" >
                    <HardwareList
                    category ="Desktop"
                    name = "Lenovo Thinkpad"
                    serialNo = {273921923290}/>
                </div>
                
            </div>
        </div>
    )
}

export default DisplayHardware;