const mongoose = require('mongoose')

const HardwareSchema = mongoose.Schema({
    Category:String,
    Name:String,
    SerialNo:String
})

module.exports  = mongoose.model('Hardware', HardwareSchema)

