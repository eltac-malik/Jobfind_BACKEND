const {getRequirements,addRequirement} = require("../controllers/Requirements")
const {Router} = require("express")
const router = Router()

router.get("/",getRequirements)

router.post("/add",addRequirement)


module.exports = router;