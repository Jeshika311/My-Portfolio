import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", sendMessage);

export default router;
