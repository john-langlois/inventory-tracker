import React from 'react';
import Navbar from '../Navbar/Navbar'
import './home.css'

const HomePage= () =>{
    return(
        <>
        <Navbar/>
        <div className="container">
      <h1>Inventory Manager</h1>

      <div className="sections">
        <div className="section">
          <h2>Staff Inventory</h2>
          <p>Keep track of what each Staff member has, also filter using Name search and Create new members</p>
        </div>

        <div className="section">
          <h2>Hardware Inventory</h2>
          <p>Current Inventory Count, separated by Name, Category and Serial Number. Add/Remove items and filter through using name or category search</p>
        </div>

        <div className="section">
          <h2>Loans</h2>
          <p>Register any device that has been loaned, keeps track of time it was loaned and current return status.</p>
        </div>
      </div>

      <div className="footer">
        <p>Questions/Troubleshooting Contact: jlangl@uwo.ca</p>
      </div>
    </div>
        </>
    )
}


export default HomePage;