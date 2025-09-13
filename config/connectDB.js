const mongoose= require('mongoose');
const colors= require('colors');

const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/expense");
        console.log(`server running on ${mongoose.connection.host}`.bgCyan);
        console.log("Connected to mongo")
    }
    catch(error){
        console.log(`${error}`.bgRed);
    }
};

module.exports = connectDB;