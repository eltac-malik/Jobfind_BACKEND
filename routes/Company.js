const {Router} = require("express")
const router = Router()

const {getCompany,addCompany} = require("../controllers/Company")

router.get("/",getCompany)
router.post("/add",addCompany)

module.exports = router;