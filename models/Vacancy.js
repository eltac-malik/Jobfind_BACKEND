const {Schema,model} = require('mongoose')

const vacancySchema = new Schema({
    name:{type:String,required:true},
    requirements:[
        {requirementId:{type:Schema.Types.ObjectId,ref:"Requirement"}
        }
    ],
})

module.exports = model("Vacancy",vacancySchema)

