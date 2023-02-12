const {Schema,model} = require("mongoose")

const requirementSchema = new Schema({
    title:{type:String}
})


module.exports = model("Requirement",requirementSchema)