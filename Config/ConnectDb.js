const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    let result = await mongoose.connect("mongodb://localhost:27017/akel", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" your browser is successfuly connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;