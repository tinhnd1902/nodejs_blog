const mongooes = require("mongoose");

async function connect() {
  try {
    await mongooes.connect("mongodb://localhost:27017/panda_education_dev", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect Fail", error);
  }
}

module.exports = { connect };
