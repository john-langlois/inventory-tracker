import React, {useState, useEffect} from 'react';
import Navbar from '../../Navbar/Navbar'
import DisplayStaff from './DisplayStaff';
import styles from './Staff.module.css'

const StaffInventory = ()=>{

    const [staffInfo,setStaffInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/staff',{
            method: 'GET'
        })
        .then(res=>res.json())
        .then(data => {
            setStaffInfo(data);
            console.log(data[0])
        })
      }, []);
    

    return(
        <>
        <Navbar/>
        <div className = {styles.search}>
            <input className = {styles.search_button} placeholder = "Search by Staff Name..."/>
        </div>
        <div className = {styles.staff}>
            {staffInfo.map((item) =>(
                <DisplayStaff
                key={item._id} 
                name = {item.UserName}
                department = {item.DepartmentName}
                officeNo = {item.OfficeNo}
                userID = {item.UserID}
                DesktopNo = {item.Desktop_SerialNo} 
                MonitorNo = {item.Monitor_SerialNo}
                />
            ))}
        </div>
        </>
    )
}

export default StaffInventory;