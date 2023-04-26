import React, {useState, useEffect} from 'react';
import Navbar from '../../Navbar/Navbar'
import DisplayStaff from './DisplayStaff';
import styles from './Staff.module.css'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
  } from '@material-ui/core';


const StaffInventory = ()=>{
    const [staffInfo,setStaffInfo] = useState([]);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [officeNo, setOfficeNo] = useState('');
    const [userID, setUserID] = useState('');
    const [systemName, setSystemName] = useState('');
    const [desktopSerialNo, setDesktopSerialNo] = useState('');
    const [monitorSerialNo, setMonitorSerialNo] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
      };
    
      const handleOfficeNoChange = (event) => {
        setOfficeNo(event.target.value);
      };
    
      const handleUserIDChange = (event) => {
        setUserID(event.target.value);
      };
    
      const handleSystemNameChange = (event) => {
        setSystemName(event.target.value);
      };
    
      const handleDesktopSerialNoChange = (event) => {
        setDesktopSerialNo(event.target.value);
      };
    
      const handleMonitorSerialNoChange = (event) => {
        setMonitorSerialNo(event.target.value);
      };

      const handleSubmit = () => {
        handleClose();
      };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   

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
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Create New
            </Button>
        <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Staff Member</DialogTitle>
      <DialogContent>
      <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Department"
          value={department}
          onChange={handleDepartmentChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Office Number"
          value={officeNo}
          onChange={handleOfficeNoChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="User ID"
          value={userID}
          onChange={handleUserIDChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="System Name"
          value={systemName}
          onChange={handleSystemNameChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Desktop Serial Number"
          value={desktopSerialNo}
          onChange={handleDesktopSerialNoChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Monitor Serial Number"
          value={monitorSerialNo}
          onChange={handleMonitorSerialNoChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary "variant="outlined"> 
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant ="outlined"> 
          Create
        </Button>
      </DialogActions>
    </Dialog>
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