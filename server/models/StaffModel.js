const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
    UserName:String,
    DepartmentName:String,
    OfficeNo:String,
    UserID:String,
    Desktop_SerialNo:String,
    Monitor_SerialNo:String
})

module.exports = mongoose.model('Staff', StaffSchema);