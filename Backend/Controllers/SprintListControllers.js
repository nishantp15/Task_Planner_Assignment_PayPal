const { sprintlist } = require("../Models/SprintListSchema");

async function GetSprintData() {
  let data = sprintlist.find();
  return await data;
}

async function GetSprintDataById(id) {
  let data = sprintlist.findById(id);
  return await data;
}

//===================================******* Post Data *********=================================

async function CreateData(data) {
  return await sprintlist.create({
    ...data,
  });
}

//===================================******* Patch Data *********=======================================================

async function UpdateData(id, data) {
  await sprintlist.findByIdAndUpdate(id, {
    $set: {
      ...data,
    },
  });

  const UpadatedData = await sprintlist.findById(id);
  return UpadatedData;
}

async function DeleteData(id) {
  const DeletedData = await sprintlist.findById(id);
  await sprintlist.findByIdAndDelete(id);
  return DeletedData;
}

module.exports = { GetSprintData,GetSprintDataById, CreateData, UpdateData, DeleteData };
