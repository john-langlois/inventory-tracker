import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import DisplayLoans from './DisplayLoans'

const Loans = () => {
    const [item, setItem] = useState('');
    const [person, setPerson] = useState('');
    const [returned, setReturned] = useState(false);
    const [status, setStatus] = useState('');
    const date = new Date().toLocaleString();
    
    const addLoan = () =>{
        fetch('http://localhost:5000/loans', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({item, person, status, date})
    })
};

    //function that is called when loan is added
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusMessage();
        //addLoan();
    }

    //sets item name 
    const setItemName = (e) => {
        setItem(e.target.value)
    }
    //sets person name
    const setPersonName = (e) => {
        setPerson(e.target.value)
    }

    //sets status of loan message
    const setStatusMessage = () => {
        setReturned(!returned);
        if(!returned){
            setStatus('In Use/Not Returned');
        }
        else{
            setStatus('Returned');
        }
    }
  return (
    <div>
        <Navbar/>
        <form className = "add-loan">
            {/* Might add functionality to search loans after
            <input className = "search_button" placeholder = "Search by Item or Person..."/> 
            */}
            <input value = {item} onChange= {setItemName} className = "search_button" placeholder = "Item Name" />
            <input  value = {person} onChange = {setPersonName} className = "search_button" placeholder = "Person"/>
            <button onClick={handleSubmit} className='btn'>Add Loan</button>
        </form>

        <div className = "content">
            <div className="loan-grid">
                <div className="loans">
                    <DisplayLoans
                    Item = "Chromebook Cart"
                    Person = "John Doe"
                    Status = {status}
                    Date = {new Date().toLocaleString()}
                    returned = {setStatusMessage}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Loans;
