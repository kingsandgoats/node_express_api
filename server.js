const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes/routes");
const morgan = require("morgan");
const connectDB = require("./config/db.config");

// load env File

//use middleware morgan
// app.use(morgan("dev"));
dotenv.config({ path: "./config/config.env" });
const app = express();

connectDB();

app.use("/api/v1/bootcamp", route);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`)
);


process.on('unhandledRejection',(err,promise)=>{
  console.log(`The Error is : ${err}`)
  server.close(()=>process.exit(1))
})
