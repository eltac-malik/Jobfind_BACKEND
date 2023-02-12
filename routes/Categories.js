const {getCategories,addCategory} = require("../controllers/Categories")

const {Router} = require("express")

const router = Router()

router.get("/",getCategories)

router.post("/x",addCategory)

module.exports = router;




