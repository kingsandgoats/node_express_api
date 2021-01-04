const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes/routes");
const morgan = require("morgan");
const connectDB = require("./config/db.config");
const errorHandlers = require("./middleware/err");

// load env File

//use middleware morgan
// app.use(morgan("dev"));
dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.json())

connectDB();

app.use("/api/v1/bootcamp", route);
// need to use middleware if we need to acces after bootcamp
app.use(errorHandlers);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`)
);


process.on('unhandledRejection',(err,promise)=>{
  console.log(`The Error is : ${err}`)
  server.close(()=>process.exit(1))
})
