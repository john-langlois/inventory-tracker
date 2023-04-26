const router = require('express').Router();
const Hardware = require('../models/HardwareModel')


router.get('/all', async (req, res) => {
    const items = await Hardware.find();
    try{
        res.status(200).json(items);
    }
    catch(err){
        res.json({err:err.message})
    }
})

//Function to add hardware
router.post('/add',async (req, res) => {
    const newHardware = new Hardware({
            Category:req.body.Category,
            Name: req.body.Name,
            SerialNo: req.body.SerialNo
        })
    try{
        newHardware.save()
        res.status(200).json(newHardware)
    }
    catch(err){
        res.json({err:err.message});
    }

})

//Function to remove hardware
router.post('/remove/:hardware', async(req,res)=>{
    try{
        await Hardware.findOneAndDelete({_id:req.params.hardware})
        res.status(200).json("Item has been removed")
    }
    catch(err){
        res.json({err:err.message})
    }
})

//Function to update hardware
router.post('/update', async(req,res)=>{
    const serial = req.body.SerialNo;
    const newName = req.body.updatedName;
    const newCategory = req.body.updatedCategory;
    try{
        await Hardware.findOneAndUpdate({SerialNo:serial},{
            $set:{
                "Name":newName,
                "Category":newCategory
            }
        })
        res.status(200).json("Loan Updated")
    }
    catch(err){
        res.json({err:err.message})
    }
})

module.exports = router;