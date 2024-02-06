const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  level: 'error', // Set the logging level to 'error'
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: 'error.log' }) // Log errors to a file
  ]
});


module.exports = (error, filename)=>{
    logger.error(filename)
    logger.error(error)

};