const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require("path")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

// Concentrate on this part of server
app.post('/data',(req,res)=>{

    // 1. The data which is received by server in body of request
    console.log('request',req.body);

    //2. Only the data is send back to the frontend in form of JSON object
    res.send({data: req.body.text});

});


app.listen(3005,()=>{
    console.log('AJAX Server has started Locally at http://localhost:3005')
})