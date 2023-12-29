



// let dotenv = require("dotenv");

// require("dotenv").config();

require('dotenv').config();
console.log('nnn' + process.env.port)
 
module.exports = {
    port : process.env.port
}