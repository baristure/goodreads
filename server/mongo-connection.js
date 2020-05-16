const mongoose = require('mongoose');


async function main() {
    await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/goodnews",
      { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true }
      
    );
    console.log("MongoDB database connection established successfully");
  }
  
  main();
