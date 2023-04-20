import React, {useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import DisplayLoans from './DisplayLoans'

const Loans = () => {
    const [item, setItem] = useState();
    const [person, setPerson] = useState();
    const loans = [];
    const loanObj = {}

    const handleSubmit = () => {
        
        loanObj.item = item;
        loanObj.person = person;
        loanObj.status = "In Use/Not Returned"
        loanObj.date = Date.toLocaleDateString(Date.now());
        loans.push(loanObj);
        console.log(loanObj)
    }

    const setItemName = (e) => {
        setItem(e.target.value)
    }
    const setPersonName = (e) => {
        setPerson(e.target.value)
    }
  return (
    <div>
        <Navbar/>
        <form className = "add-loan">
            {/* Might add functionality to search loans after
            <input className = "search_button" placeholder = "Search by Item or Person..."/> 
            */}
            <input value = {item} onChange= {setItemName} className = "search_button"placeholder = "Item Name" />
            <input  value = {person} onChange = {setPersonName} className = "search_button" placeholder = "Person"/>
            <button onClick={handleSubmit} className='btn'>Add Loan</button>
        </form>

        <div className = "content">
            <div className="loan-grid">
                <div className="loans">
                    <DisplayLoans
                    Item = "Chromebook Cart"
                    Person = "John Doe"
                    Status = "In Use/Not Returned"
                    Date = {new Date().toLocaleString()}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loans;
