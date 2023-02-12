const categoryModel = require("../models/Category")

const getCategories = async (req,res)=>{
   const categories =  await categoryModel.find()
   res.json(categories)
}

const addCategory = async (req,res)=>{
    await categoryModel.create(req.body)
    res.json({status:200})
}

const editCategory = async (req,res)=>{
    await categoryModel.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    res.json({status:201})
}



module.exports = {getCategories,addCategory,editCategory}