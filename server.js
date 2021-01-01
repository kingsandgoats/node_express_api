const express = require('express');

const dotenv  = require('dotenv');
const route = require('./routes/routes');

const morgan = require('morgan');


// load env File

dotenv.config({path:'./config/config.env'});
const app = express()

//use middleware morgan

app.use(morgan('dev'));

app.use('/api/v1/bootcamp',route);


const PORT = process.env.PORT||5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`));