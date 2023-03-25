const mongoose = require("mongoose");

const sprintlist = mongoose.model("sprintlist", {
    sprintName:String
});

module.exports = { sprintlist };




