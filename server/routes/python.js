import { Router } from "express"
import { 
  getAllBrands
  , getBrand 
} from "../controllers/python.js"


const router = new Router()

router.get("/",   getAllBrands)
router.post("/",  getBrand)


export default router