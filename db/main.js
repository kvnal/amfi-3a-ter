require('dotenv').config()
const mongoose = require('mongoose')

// 
const connect = (callback)=>{
    mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .catch(err=>{console.log(err);})
    
    const db = mongoose.connection
    db.once('open',()=>{
        console.log("Database connected!");
        return callback()
    })
}



module.exports = {connect}