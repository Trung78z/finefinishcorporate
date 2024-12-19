import { Router } from "express";
import { createSendMail, getMailInfo, getMailInfoID, removeContact } from "../controllers/mailController";

const router = Router();
router.post("/", createSendMail);
router.get("/", getMailInfo);
router.get("/:id", getMailInfoID);
router.delete("/:id", removeContact);

export default router;
