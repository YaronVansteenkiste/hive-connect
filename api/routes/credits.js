import express from "express";
import { getCredits } from "../controllers/credits.js";

const router = express.Router() 

router.get("/:id", getCredits)

export default router