import React from 'react';
import styles from './Staff.module.css'

const DisplayStaff = ({name, department, officeNo, userID, SystemName, DesktopNo, MonitorNo, staffId,remove }) =>{
    return (
        <div className = {styles.track_row}>
            <div className = {styles.header}>
            <p>Name: {name}</p>
            <p>Department: {department}</p>
            <p>Office Number: {officeNo}</p>
            <p> User ID:{userID}</p>
            <p>Desktop Serial Number:{DesktopNo}</p>
            <p>Monitor Serial Number:{MonitorNo}</p>
            <button  className = {styles.remove_btn} value = {staffId} onClick={remove}>Remove Staff</button>
            </div>
        </div>
    )
}

export default DisplayStaff;