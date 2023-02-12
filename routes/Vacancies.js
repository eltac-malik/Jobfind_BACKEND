const {Router} = require("express")
const router = Router()

const {getVacancy,addVacancy,getVacancyById} = require("../controllers/Vacancies")

router.get("/",getVacancy)
router.post("/add",addVacancy)
router.get('/:id',getVacancyById)


module.exports = router;