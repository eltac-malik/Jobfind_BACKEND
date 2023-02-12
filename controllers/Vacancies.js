const vacancyModel = require('../models/Vacancy')

const getVacancy = async (req,res)=>{
    const vacancy =  await vacancyModel.find().populate("requirements.requirementId category")
    res.json(vacancy)
}

const getVacancyById = async (req,res)=>{
    const vacancyById = await vacancyModel.findById(req.params.id).populate("requirements.requirementId category")
    res.json(vacancyById)
}

const addVacancy = async (req,res)=>{
    await vacancyModel.create(req.body)
    res.json({status:201})
}


module.exports = {getVacancy,addVacancy,getVacancyById}