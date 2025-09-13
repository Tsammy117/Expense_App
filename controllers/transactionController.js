const transactionModel = require('../models/transactionModel');
const moment= require('moment');
const getAllTransaction=async(req,res)=>{
    try {
        const {frequency , selectDate ,type}=req.body
        const transactions =await transactionModel.find({
            ...(frequency !== 'custom' ?  {
                date:{
                $gt: moment().subtract(Number(frequency),'d').toDate(),
                }
                } : {
                date:{
                    $gte: selectDate[0],
                    $lte: selectDate[1],
                }
                })
            ,
            userid: req.body.userid, 
            
            ...(type !=='all' && {type}),
        });
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const deleteTransection = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editTransection = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};




const addTransaction= async(req,res)=>{
    try{console.log('hello0')
        const newTransaction =new transactionModel(req.body)
        console.log('hello1')
        await newTransaction.save()
        
        res.status(201).send('transaction created')
    }catch(error){
        console.log(error)
        console.log('hello2')
        res.status(500).json(error);
    }
};

module.exports ={getAllTransaction,addTransaction ,editTransection,deleteTransection}