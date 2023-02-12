const vacancyModel = require('../models/Vacancy')

const getVacancy = async (req,res)=>{
    const vacancy =  await vacancyModel.find().populate("requirements.requirementId")
    res.json(vacancy)
}



const addVacancy = async (req,res)=>{
    await vacancyModel.create(req.body)
    res.json({status:201})
}


module.exports = {getVacancy,addVacancy}