const companyModel = require("../models/Company")

const getCompany = async (req,res)=>{
    const company =  await companyModel.find()
    res.json(company)
}

const addCompany = async (req,res)=>{
    await companyModel.create(req.body)
    res.json({status:201})
}



module.exports = {getCompany,addCompany}