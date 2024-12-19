import express from "express";
import {
  getPosts,
  getPostByTitleAndCategory,
  addPost,
  editPost,
  removePost,
  getPostById,
} from "../controllers/postController";
import { upload } from "../helpers/multerHelper";

const router = express.Router();
router.get("/", getPosts);
router.get("/:title/:categoryName", getPostByTitleAndCategory);
router.get("/:id", getPostById);
router.post("/",upload.single("image") ,addPost);
router.put("/:id",upload.single("image") ,editPost);
router.delete("/:id", removePost);

export default router;
