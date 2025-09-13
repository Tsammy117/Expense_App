const express= require('express');
const { addTransaction, getAllTransaction ,editTransection,deleteTransection } = require('../controllers/transactionController');

//router object 
const router= express.Router();

//routes
//add transaction POST method
router.post('/add-transaction',addTransaction)

//Edit transection POST MEthod
router.post("/edit-transection", editTransection);

//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);

//get transaction
router.post('/get-transaction',getAllTransaction)

module.exports = router;