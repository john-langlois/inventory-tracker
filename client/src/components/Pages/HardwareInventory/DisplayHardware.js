//Page that shows list of all of the available hardware
import { React, useState, useEffect } from 'react';
import HardwareList from './HardwareList';
import './Hardware.css';
import {
        Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogTitle,
        TextField,
      } from '@material-ui/core';
function DisplayHardware() {
    const [hardware,setHardware] = useState([])
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [serialNo, setSerialNo] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        getHardware();
    }, []);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
        setOpen(false);
    } 
    const handleSubmit = () => {
        if(name !== '' || category !== '' || serialNo !== ''){
        console.log(error);
        setError(false);
         addHardware();
         handleClose();
         window.location.reload();
    }
    else{setError(true);}
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleSerialNoChange = (event) => {
        setSerialNo(event.target.value);
    }

    const getHardware = () => {
        fetch('http://localhost:5000/hardware/all',{method: 'GET'})
        .then(response => response.json())
        .then(data => setHardware(data))
    }

    const addHardware = () =>{
        fetch('http://localhost:5000/hardware/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({Name: name, Category: category,SerialNo: serialNo})
    });
    window.location.reload();
};

const removeHardware = async(event)=>{
    const value = event.target.getAttribute('value');
    await fetch(`http://localhost:5000/hardware/remove/${value}`,{method: 'POST'});
    window.location.reload();
}

    return(
        <div>
            <Button  className = "modal-button" variant="contained" color="primary" onClick={handleOpen}>
                Create New Hardware Item
            </Button>
            <input className = "hardware-search" placeholder = "Search by Hardware Name.."/>
            <input className = "hardware-search" placeholder = "Search by Category.."/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Hardware Item</DialogTitle>
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
                    label="Category"
                    value={category}
                    onChange={handleCategoryChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    />
                    <TextField
                    label="Serial Number"
                    value={serialNo}
                    onChange={handleSerialNoChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    {error && <p> Please fill in all fields</p>}
                    <Button onClick={handleClose} color="primary "variant="outlined"> 
                    Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" variant ="outlined"> 
                    Create
                    </Button>
                    
                </DialogActions>
    </Dialog>
            
            <div className='hardware-grid'>
                <div className ="hardware-item" >
                    {hardware?.map((item)=>(
                        <HardwareList
                            category ={item?.Category}
                            name = {item?.Name}
                            serialNo = {item?.SerialNo}
                            hardwareId={item?._id}
                            remove = {removeHardware}/>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default DisplayHardware;