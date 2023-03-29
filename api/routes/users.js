import express from "express";
import { getUser , updateUser, updateProfilePic} from "../controllers/users.js";
import upload from "../middleware/upload.js";


const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.post("/update/:userId", updateProfilePic)
router.post("/update-profile-pic", upload.single('profilePic'), updateProfilePic);


export default router