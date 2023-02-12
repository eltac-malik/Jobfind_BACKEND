const {Schema,model} = require('mongoose')

const vacancySchema = new Schema({
    name:{type:String,required:true},
    requirements:[
        {requirementId:{type:Schema.Types.ObjectId,ref:"Requirement"}
        }
    ],
    category:{type:Schema.Types.ObjectId,ref:"Category"}
})

module.exports = model("Vacancy",vacancySchema)

