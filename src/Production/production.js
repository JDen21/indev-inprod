

function inProd(callback){
    if(process.env.NODE_ENV === "production")
        callback()
}

module.exports = { inProd }