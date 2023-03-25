const { tasklist } = require("../Models/TaskListSchema");

async function GetTaskListData() {
  let data = tasklist.find();
  return await data;
}

async function GetTaskListDataById(id) {
  let data = tasklist.findById(id);
  return await data;
}

//===================================******* Post Data *********=================================

async function CreateData(data) {
  return await tasklist.create({
    ...data,
  });
}

//===================================******* Patch Data *********=======================================================

async function UpdateData(id, data) {
  await tasklist.findByIdAndUpdate(id, {
    $set: {
      ...data,
    },
  });

  const UpadatedData = await tasklist.findById(id);
  return UpadatedData;
}

async function DeleteData(id) {
  const DeletedData = await tasklist.findById(id);
  await tasklist.findByIdAndDelete(id);
  return DeletedData;
}

module.exports = { GetTaskListData,GetTaskListDataById, CreateData, UpdateData, DeleteData };
