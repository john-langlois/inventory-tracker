const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
    Item:String,
    Person:String,
    Status:String,
    Date:String
})

module.exports  = mongoose.model('Loans',LoanSchema);