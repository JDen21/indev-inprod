const { inDev } = require('./src/Development/development')
const { inProd } = require('./src/Production/production')

try{
    var envInstalled = require('dotenv').config()
}
catch(err){
    envInstalled = null
}

if(!envInstalled)
    console.error('indev-inprod need to have dotenv installed to specify environment mode. indev-inprod will assume that you are in development mode.')

module.exports = { inDev, inProd }