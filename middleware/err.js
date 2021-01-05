const ErrorResponse = require("../utils/errorResponse");
const errorHandlers = (err,req,res,next)=>{
    let error = {...err};
    error.message = err.message;
    console.log(error)

    if(err.name === 'CastError'){
       const  message = `Resource cant't find this id ${error.value}`
        error = new ErrorResponse(message,404);
    }

    if(err.code === 11000){
        const message = `Dulication Field Found Please Check`
        error = new ErrorResponse(message,404);
    }

    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val =>val.message)
        error = new ErrorResponse(message,400)
    }


    res.status(error.statusCode||500).json({
        success:false,
        error:error.message||'Server Error'
    })
}

module.exports = errorHandlers;