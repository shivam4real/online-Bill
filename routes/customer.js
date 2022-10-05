const router = require('express').Router()
const billModel = require('../models/bill-model')

router.post('/login', async(req,res) =>{
    let mobileNo = req.body.mobileNo
    let data = await billModel.findOne({custMobile: mobileNo})
    if (!data){
        req.json({
            success : false,
            message : 'No bill found'
        })
    }
    else{
        // JWT 
        req.json({
            success : true,
            data : data
        })
    }

})

router.get('/getUserBills', async(req,res) => {
    let mobileNo = jwt.mobileNo
    if(!mobileNo){
        req.json({
            success : false,
            message : 'mobile number is required'
        })
    }
    else{
        let data = await billModel.find({custMobile : mobileNo})
        if (!data){
            req.json({
                success : false,
                message : 'No bills found'
            })
        }
        else{
            req.json({
                success : true,
                data : data
            })
        }
    }
})