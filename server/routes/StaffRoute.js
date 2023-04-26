const router = require('express').Router();
const Staff = require('../models/StaffModel')

//Function to get all staff 

router.get('/', async(req, res) => {
    try{
        const staff= await Staff.find()
        res.status(200).json(staff);
    }
    catch(err){
        res.json({err:err.message})
    }
})

//Function to add Staff
router.post('/add',async (req, res) => {
    const newStaff = new Staff({
            UserName:req.body.Name,
            DepartmentName:req.body.Department,
            OfficeNo:req.body.OfficeNo,
            UserID:req.body.UserId,
            Desktop_SerialNo:req.body.DesktopSerialNo,
            Monitor_SerialNo:req.body.MonitorSerialNo
        })
    try{
        newStaff.save()
        res.status(200).json(newStaff)
    }
    catch(err){
        res.json({err:err.message});
    }

})

//Function to remove Staff
router.post('/remove/:staff', async(req,res)=>{
    try{
        await Staff.findOneAndDelete({_id:req.params.staff})
        res.status(200).json("Staff has been removed")
    }
    catch(err){
        res.json({err:err.message})
    }
})

//Function to update Staff
router.post('/update', async(req,res)=>{
   const Name = req.body.Name,
            Department =req.body.Department,
            OfficeNo =req.body.OfficeNo,
            UserId =req.body.UserId,
            SystemName =req.body.SystemName,
            DesktopSerialNo =req.body.DesktopSerialNo,
            MonitorSerialNo =req.body.MonitorSerialNo
    try{
        await Staff.findOneAndUpdate({Person:req.body.person},{
            $set:{
                "Name":Name,
                "Department":Department,
                "OfficeNo":OfficeNo,
                "UserId":UserId,
                "SystemName":SystemName,
                "DesktopSerialNo":DesktopSerialNo,
                "MonitorSerialNo":MonitorSerialNo
            }
        })
        res.status(200).json("Staff Updated")
    }
    catch(err){
        res.json({err:err.message})
    }
})

module.exports = router;