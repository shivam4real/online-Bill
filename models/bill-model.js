const mongoose = require('mongoose')
const schema = mongoose.Schema()

const BillModel = new schema({
    items: [],
    vendorName : {type: string , required: true},
    custMobile : {type: Number , required: true}

},{timestramp: true})

module.exports = mongoose.model('Bill' , BillModel)