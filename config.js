const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}  
module.exports = {
PREFIX: process.env.PREFIX || ".",


  SESSION_ID: process.env.SESSION_ID || "1ppVyShI#NnH4EljNryyzbcyRB00Hw8DNaPrEEp5rWxZ91747hpY",


  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 


  AUTO_REACT: process.env.AUTO_REACT || 'true',


  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'false',


AUTO_READ: process.env.AUTO_READ || 'false',

  AUTO_RECORD: process.env.AUTO_RECORD || 'false',


AUTO_TYPING: process.env.AUTO_TYPING || 'true',

  AUTO_RECORDING: process.env.AUTO_RECORDING || 'false',


  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'true',


  AUTO_REACT: process.env.AUTO_REACT || "true",

ANTI_BAD: process.env.ANTI_BAD || "true",


ANTI_LINK: process.env.ANTI_LINK || "true",


ALIVE_MSG: process.env.ALIVE_MSG || "IAm Online Golden Queen Mini",

ALIVE_IMG: process.env.ALIVE_IMG || "IAm Online Golden Queen Mini",

  AUTO_BLOCK: process.env.AUTO_BLOCK || "false"

 MODE: process.env.MODE || "public",


  MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
