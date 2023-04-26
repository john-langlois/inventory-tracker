import React, {useState, useEffect} from 'react'
import Navbar from '../../Navbar/Navbar';
import DisplayLoans from './DisplayLoans'

const Loans = () => {
    const [item, setItem] = useState('');
    const [person, setPerson] = useState('');
    const date = new Date().toLocaleString();
    const [loanData,setLoanData] = useState([]);

    const returnedStatus = async(event)=>{
        const value = event.target.getAttribute('value');
        await fetch(`http://localhost:5000/loans/return-true/${value}`,{method: 'POST'});
        window.location.reload();
    }
    const notReturnedStatus = async(event)=>{
        const value = event.target.getAttribute('value');
        await fetch(`http://localhost:5000/loans/return-false/${value}`,{method: 'POST'});
        window.location.reload();
    }

    const removeLoan = async(event)=>{
        const value = event.target.getAttribute('value');
        await fetch(`http://localhost:5000/loans/remove/${value}`,{method: 'POST'});
        window.location.reload();
    }

    useEffect(() => {
        getLoan();
    
    },[]);
    
    const addLoan = () =>{
        fetch('http://localhost:5000/loans/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({item, person, date})
    });
    window.location.reload();
};

const getLoan = () =>{
    fetch('http://localhost:5000/loans/all', {method: 'GET'})
    .then(res => res.json())
    .then(data => setLoanData(data))
}

    //function that is called when loan is added
    const handleSubmit = (e) => {
        e.preventDefault();
        if(item !== '' || person !== ''){
            addLoan();
        }
        else{
            alert("Please fill out all fields");
        }
        
    }

    //sets item name 
    const setItemName = (e) => {
        setItem(e.target.value)
    }
    //sets person name
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
            <input value = {item} onChange= {setItemName} className = "search_button" placeholder = "Item Name" />
            <input  value = {person} onChange = {setPersonName} className = "search_button" placeholder = "Person"/>
            <button  onClick={handleSubmit} className='loan-btn'>Add Loan</button>
        </form>

        <div className = "content">
            <div className="loan-grid">
                <div className="loans">
                    {loanData?.map((loan)=>(
                        <DisplayLoans
                        key = {loan._id}
                        Item = {loan?.Item}
                        Person = {loan?.Person}
                        Status = {loan?.Status}
                        date = {loan?.Date}
                        returned = {returnedStatus}
                        notReturned={notReturnedStatus}
                        loanId = {loan?._id}
                        remove = {removeLoan}
                    />
                    ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}


export default Loans;
