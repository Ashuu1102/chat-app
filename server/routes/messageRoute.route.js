import {Router} from "express"
import { addMessage } from "../controllers/messageController.controller.js"
import { getAllMessage } from "../controllers/messageController.controller.js"

const router = Router()

router.route("/addmsg").post(addMessage)
router.route("/getmsg").post(getAllMessage)

export default router