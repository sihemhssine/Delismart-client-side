const express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
cors = require("cors"),
mongoose = require("mongoose"),
config = require("./config/DB") 
const app = express() 
mongoose.Promise = global.Promise 
mongoose.connect(config.DB).then(
  () => {console.log("Database is connected") },
  err => { console.log("Can not connect to the database"+ err)}
)
const categoryroutes = require("./routes/CategoryRoute"); 
const productroutes = require("./routes/ProductRoute"); 
const userroutes = require("./routes/UserRoute"); 

app.use(bodyParser.json()) 
app.use(cors()) 
const port = process.env.PORT || 4000 

app.use("/categories", categoryroutes) 
app.use("/products", productroutes) 
app.use("/users", userroutes) 




 const server = app.listen(port, function(){
 console.log("Listening on port " + port) 
}) 

