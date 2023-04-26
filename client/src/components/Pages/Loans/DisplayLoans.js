import React from 'react'
import './Loans.css'

const DisplayLoans = ({Item, Person, Status, date, returned,notReturned,loanId,remove}) => {
  return (
    <div className='track_row'>
        <div className='header'>
            <p> Item on Loan: {Item}</p>
            <p> Loaned by: {Person}</p>
            <p> Return Status : {Status ? "Returned" : "In Use/Not Returned"}</p>
            <p> Loaned at: {date}</p>
            {!Status ? <button className='loan-btn' value = {loanId} onClick = {returned}>Returned</button> :
            <button className='loan-btn' value = {loanId} onClick = {notReturned}>Not-Returned</button>}
            <button  className='loan-btn' value = {loanId} onClick = {remove}>Delete Loan</button>
        </div>    
    </div>
  )
}

export default DisplayLoans
