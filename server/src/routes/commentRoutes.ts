import express from "express";
import {
    addComment,
    removeComment
} from "../controllers/commentController";

const router = express.Router();
router.post("/", addComment);
router.delete("/:id", removeComment);

export default router;
