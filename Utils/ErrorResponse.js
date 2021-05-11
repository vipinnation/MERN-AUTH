

class ErrorResponse extends Error{

    constructor(messagge,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse