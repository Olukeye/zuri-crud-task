const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
app.use(bodyParser.json());
app.use(express.json())


// database
mongoose.connect('mongodb://localhost:27017/ZuriDatabase', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

// schema
const dataSchema = new mongoose.Schema({
 message: "string",
 name: "string",
 email: "string",
 country: "string"
});
const Data  = mongoose.model("Data", dataSchema);


// Route
// Request to create new user data
app.post('/data', function(req, res) {
    const data = req.body.data;
   Data.create({
       name: data.name,
       email: data.email,
       country: data.country
   }, (err, newData) => {
       if(err) { 
           return res.status(500).json({message: err})
       } else {
           return res.status(200).json({ message: "Your data has been created", newData})
       }
   })
})

// resquest to  get user data
app.get('/data/:id', function(req, res) {
   Data.findById(req.params.id, (err, data) => {
       if(err) { 
           return res.status(500).json({message: err})
       } else {
           return res.status(200).json({message: "This is  your data! ", data})
       }
   })
})

// request for data update/edit
app.patch('/data/:id', function(req, res) {
   Data.findByIdAndUpdate(req.params.id, req.body.data, (err, data) => {
       if(err) { 
           return res.status(500).json({message: err})
       } else if (!data) {
           return res.status(200).json({message: "We couldn't find your data"})
       } else {
           data.save((err, newdData) => {
               if(err) {
                   return res.status(400).json({message: err})
               } else {
                   return res.status(200).json({message: "Data updated successfully!", newdData})
               }
           })
       }
   })
})

app.delete('/data/:id', function(req, res) {
    Data.findByIdAndDelete(req.params.id, (err, data) => {
        if(err) {
            return res.status(500).json({message: err})
         } else {
            return res.status(200).json({message: "Data delete successfully!"})
        }
     })
})


// PORT
const port = process.env.PORT || 2021
app.listen(port, () =>{
    console.log('server is running on port  ' + port)
})