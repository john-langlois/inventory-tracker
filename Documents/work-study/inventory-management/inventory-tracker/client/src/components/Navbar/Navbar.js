import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Navbar.module.css'


const Navbar = () => {    
	return (    
            <div className = {styles.navbar}>
                <h1>
                    Inventory Manager
                </h1>
                <Link to = "/"><button className = {styles.white_btn}>Home</button></Link>
                <Link to = "/staff-inventory"><button className = {styles.white_btn}> Staff Inventory</button></Link>
                <Link to = "/hard-inventory"><button className = {styles.white_btn}>Hardware Inventory</button></Link>
                <Link to = "/loans"><button className = {styles.white_btn}>Loans</button></Link>
                <Link to = "/settings"><button className = {styles.white_btn}>Settings</button></Link>
            </div>
	);
};

export default Navbar;