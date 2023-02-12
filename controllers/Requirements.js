const requirementModel = require("../models/Requirement")


const getRequirements = async (req,res)=>{
    const requirement =  await requirementModel.find()
    res.json(requirement)
}

const addRequirement = async (req,res)=>{
    await requirementModel.insertMany(req.body.requirements)
    res.json({status:201})
}



module.exports = {getRequirements,addRequirement}