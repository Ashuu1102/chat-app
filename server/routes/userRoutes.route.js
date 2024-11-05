import {Router} from "express"
import { register } from "../controllers/userController.controller.js"

const router = Router()

router.route("/register").post(register)

export default router