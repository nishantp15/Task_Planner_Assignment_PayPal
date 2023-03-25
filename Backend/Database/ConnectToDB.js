const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

console.log(process.env.URI);
async function ConnectToDB() {
  
  return await mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority", j: true, wtimeout: 1000 },
  });
}
module.exports = ConnectToDB;

//cors mongoose express
