const errorResponse = require('./ErrorResponse')

const errorHandler = (err, req,res,next) =>{

    let error = {...err};
    let errorMessage = err.message;

    if(err.code === 11000){
        const message = "Duplicate Value"
    }
}