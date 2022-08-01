
function inDev(callback){

    if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined)
        callback()
}

module.exports = { inDev }