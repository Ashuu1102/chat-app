import {Router} from "express"
import { login, register, setAvatar } from "../controllers/userController.controller.js"

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/setAvatar/:id").post(setAvatar)

export default router