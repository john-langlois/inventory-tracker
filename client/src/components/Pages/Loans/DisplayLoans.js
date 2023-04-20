import React from 'react'
import './Loans.css'

const DisplayLoans = ({Item, Person, Status, Date, returned}) => {
  return (
    <div className='track_row'>
        <div className='header'>
            <p> Item on Loan: {Item}</p>
            <p> Loaned by: {Person}</p>
            <p> Return Status : {Status}</p>
            <p> Loaned at: {Date}</p>
            <button onClick = {returned}>Item Returned</button>
        </div>    
    </div>
  )
}

export default DisplayLoans
