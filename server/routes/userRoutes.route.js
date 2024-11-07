import {Router} from "express"
import { getAllUsers, login, register, setAvatar } from "../controllers/userController.controller.js"

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/setAvatar/:id").post(setAvatar)
router.route("/allusers/:id").get(getAllUsers)

export default router