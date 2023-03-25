const express = require('express');
const cors = require('cors');


const SprintList = require('./Router/SprintListRoutes');
const TaskList = require('./Router/TaskListRoutes');
const ConnectToDB = require('./Database/ConnectToDB');
const app = express();

console.log(8)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);
app.use(cors());

app.use('/sprintlist',SprintList);
app.use('/tasklist',TaskList);


async function logRequest(req,res,next){
    console.log(new Date, req.method, req.url);
    next();
}
let port = process.env.PORT || 3008
ConnectToDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on ${port}`)
    })
}).catch((err)=>console.error(err));
