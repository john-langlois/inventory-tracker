const router = require('express').Router();
const Loan = require('../models/LoanModel')

//Function to add loan
router.post('/add',async (req, res) => {
    const newLoan = new Loan({
            Item:req.body.item,
            Person:req.body.person,
            Status:req.body.status,
            Date:req.body.date
        })
    try{
        newLoan.save()
        res.status(200).json(newLoan)
    }
    catch(err){
        res.json({err:err.message});
    }

})

//Function to remove loan
router.post('/remove', async(req,res)=>{
    try{
        await Loan.findOneAndDelete({Person:req.body.person})
        res.status(200).json("Loan has been removed")
    }
    catch(err){
        res.json({err:err.message})
    }
})

//Function to update loan

router.post('/update', async(req,res)=>{
    let updatedStatus = req.body.status
    try{
        await Loan.findOneAndUpdate({Person:req.body.person},{
            $set:{
                "Status":"Returned"
            }
        })
        res.status(200).json("Loan Updated")
    }
    catch(err){
        res.json({err:err.message})
    }
})

module.exports = router;