const express = require('express')
const app = express();
const bodyParser = require('body-parser')


let dataItems = [];

function generateList(){
   return dataItems.map((item,index)=>{
        return `<li list-index="${index}">${item}</li>`
    })
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public_static'));

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
              <button type="submit">Submit</button>
              </form>
              <ul>
              ${generateList()}
              </ul>
              `);

    // 4. Comment the lines 27-36 and uncomment lines below , see the change
    //     res.send({data:dataItems})
});


app.listen(3005,()=>{
    console.log('Full Load Server has started Locally at http://localhost:3005')
})