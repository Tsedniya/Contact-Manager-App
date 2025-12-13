const {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode){
    case  VALIDATION_ERROR:
      res.json({
         title:"Validation Failed",
         message: err.message,
         stackTrace: err.stack
      });
      break;
    case  NOT_FOUND:
        res.json({
        title:"Not Found",
        message: err.message,
        stackTrace: err.stack
       });
     case  FORBIDDEN:
        res.json({
        title:" FORBIDDEN",
        message: err.message,
        stackTrace: err.stack
       });
     case  UNAUTHORIZED:
        res.json({
        title:" UNAUTHORIZED",
        message: err.message,
        stackTrace: err.stack
       });
      
    
    default:
      break;
  }
  

};

module.exports = errorHandler;
