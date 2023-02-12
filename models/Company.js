const {Schema,model} = require("mongoose")

const companySchema = new Schema({
    name:{type:String,required:true},
    image:{type:String},
    createdDate:{type:String},
    address:{type:String,required:true},
    contact:{type:String,required:true},
    email:{type:String,required:true},
    website:{type:String},
    socialNetwork:[
        {
            url: {type: String}
        }
    ]
},
{timestamps:true})

module.exports = model("Company",companySchema)