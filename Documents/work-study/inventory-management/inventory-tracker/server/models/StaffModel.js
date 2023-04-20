const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
    Name:String,
    Department:String,
    OfficeNo:String,
    UserID:String,
    SystemName:String,
    DesktopSerialNo:String,
    MonitorSerialNo:String
})

module.exports = mongoose.model('Staff', StaffSchema);