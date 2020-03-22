const express = require('express')
const app = express();
const path = require("path")
const bodyParser = require('body-parser')


let dataItems = [];

function generateList(){
   return dataItems.map((item,index)=>{
        return `<li list-index="${index}">${item}</li>`
    })
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

// Concentrate on this part of the server
app.get('/data',(req,res)=>{

    // 1. The data which is received by server in body of request - Check Console in terminal -
    console.log('request',req.body);

    // 2. A local array of List submitted in form - usually database used
    dataItems.push(req.query.text);

    // 3. Whole HTML is Send Instead of just JSON object
    res.send(`<h1>Full Page Load Server Page</h1>
              <form action="/data" method="get">
              <input type="text" name="text" placeholder="Enter text">
              <br>
              <br>
              <button type="submit">Submit</button>
              </form>
              <ul>
              ${generateList()}
              </ul>
              `);

    // 4. Comment the lines 27-36 and uncomment line below , see the change
         //  res.send({data:dataItems})
                // Explanation - The object is send which has "data" as "KEY" and "array" as "value"
                // retype the url to localhost:3005 and again enter some text
});


app.listen(3005,()=>{
    console.log('Full Load Server has started Locally at http://localhost:3005')
})