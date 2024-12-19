import express from "express";
import {
    getCategories,
    getCategoryByName,
    addCategory,
    updateCategory,
    removeCategory,
} from "../controllers/categoryController";

const router = express.Router();
router.get("/", getCategories);
router.get("/:name", getCategoryByName);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", removeCategory);

export default router;
