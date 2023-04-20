require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


app.use(express.json())
const cors = require("cors");
app.use(cors());


//define routes
app.use('/loans', require('./routes/LoanRoute'))
app.use('/staff', require('./routes/StaffRoute'))
app.use('/hardware', require('./routes/HardwareRoute'))

//mongodb+srv://inventory:manager@inventorymanagement.wqb8cvc.mongodb.net/inventory-data
mongoose.connect("mongodb://localhost:27017/inventory", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("Connected to Database"));


const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
