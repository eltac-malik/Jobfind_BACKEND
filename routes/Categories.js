const {getCategories,addCategory,editCategory} = require("../controllers/Categories")

const {Router} = require("express")

const router = Router()

router.get("/",getCategories)

router.post("/x",addCategory)

router.put("/edit/:id",editCategory)

module.exports = router;




