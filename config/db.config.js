const mongoose = require('mongoose');


const connectDB =async()=>{
    const conn = mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    });


    console.log(`connected to Mongodb ${(await conn).connection.host}`)
}


module.exports = connectDB;