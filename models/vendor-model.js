const mongoose = require('mongoose')
const schema = mongoose.Schema()

const vendorModel = new schema({
    vendorName : {type: string , required: true}

},{timestramp: true})

module.exports = mongoose.model('Vendor' , vendorModel)