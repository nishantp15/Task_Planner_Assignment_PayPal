
const express = require('express');

const{GetSprintData,GetSprintDataById, CreateData, UpdateData, DeleteData} = require('../Controllers/SprintListControllers')

const SprintRouter = express.Router();

SprintRouter.get('/',async(req,res)=>{
    try{
        const getData = await GetSprintData();
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

SprintRouter.get('/:id',async(req,res)=>{
    try{
        const getData = await GetSprintDataById(req.params.id);
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

SprintRouter.post('/',async(req,res)=>{
    try{
        const CreatedData = await CreateData(req.body);
        res.send(CreatedData);
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

SprintRouter.patch('/:id',async(req, res)=>{
    try{
       let Data =  await UpdateData(req.params.id, req.body);
        res.send(Data)
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

SprintRouter.delete('/:id',async(req,res)=>{
    try{
      let data =  await DeleteData(req.params.id);
      res.send(data)
    }
    catch(err){
        res.status(401).send(err)
        console.log(err);
    }
})

SprintRouter.get('*',async(req,res)=>{
    res.status(404).send({
        error:404,
        message:`Unknown path`
    })
})


module.exports = SprintRouter;

