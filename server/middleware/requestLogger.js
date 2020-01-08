let debug = require('debug')('server:request');

const requestLogger = function (req, res, next) {
    if(req.body && Object.keys(req.body).length !== 0){
        debug("\nBODY:", req.body);
    }

    if(req.params && Object.keys(req.params).length !== 0){
        debug("\nPARAMS:", req.params);
    
    }
    if(req.query && Object.keys(req.query).length !== 0){
        debug("\nQUERY:", req.query);
    }
    next();
}

module.exports = requestLogger;