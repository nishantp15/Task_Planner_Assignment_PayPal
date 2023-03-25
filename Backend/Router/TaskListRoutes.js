
const express = require('express');

const{GetTaskListData,GetTaskListDataById, CreateData, UpdateData, DeleteData} = require('../Controllers/TaskListControllers')

const TaskListRouter = express.Router();

TaskListRouter.get('/',async(req,res)=>{
    try{
        const getData = await GetTaskListData();
        res.send(getData); 
    }
    catch(err){
        res.status(404).send({
                status:"Failure",
                error:err.message
            })
        console.error(err);
    }
})

TaskListRouter.get('/:id',async(req,res)=>{
    try{
        const getData = await GetTaskListDataById(req.params.id);
        res.send(getData); 
    }
    catch(err){
        res.status(404).send({
                status:"Failure",
                error:err.message
            })
        console.error(err);
    }
})

TaskListRouter.post('/',async(req,res)=>{
    try{
        const CreatedData = await CreateData(req.body);
        res.send(CreatedData);
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

TaskListRouter.patch('/:id',async(req, res)=>{
    try{
       let Data =  await UpdateData(req.params.id, req.body);
        res.send(Data)
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

TaskListRouter.delete('/:id',async(req,res)=>{
    try{
      let data =  await DeleteData(req.params.id);
      res.send(data)
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

TaskListRouter.get('*',async(req,res)=>{
    res.status(404).send({
        error:404,
        message:`Unknown path`
    })
})


module.exports = TaskListRouter;

