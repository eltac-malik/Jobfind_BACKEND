const {getVacancy,addVacancy} = require("../controllers/Vacancies")
const {Router} = require("express")

const router = Router()

router.get("/",getVacancy)
router.post("/add",addVacancy)


module.exports = router;