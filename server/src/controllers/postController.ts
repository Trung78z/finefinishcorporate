import { Request, Response } from "express";
import {
  posts,
  findPost,
  createPost,
  updatePost,
  deletePost,
  postID,
} from "../services/postService";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const allPosts = await posts();
    res.status(200).json({ success: true, message: allPosts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const allPosts = await postID(id);
    res.status(200).json({ success: true, message: allPosts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getPostByTitleAndCategory = async (req: Request, res: Response) => {
  try {
    const { title, categoryName } = req.params;
    const post = await findPost(title, categoryName);
    res.status(200).json({ success: true, message: post });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const { title, description, author, categoryId } = req.body;

    console.log(req.body)


    if (!title) {
      res.status(400).json({ success: false, message: "Thiếu tiêu đề bài viết." });
      return;
    }

    if (!description) {
      res.status(400).json({ success: false, message: "Thiếu mô tả bài viết." });
      return;
    }

    if (!author) {
      res.status(400).json({ success: false, message: "Thiếu thông tin người viết." });
      return;
    }

    if (!categoryId) {
      res.status(400).json({ success: false, message: "Thiếu danh mục bài viết." });
      return;
    }

    if (!req.file) {
      res.status(400).json({ success: false, message: "No file uploaded" }); return
    }

    const filename = req.file.filename;
    const newPost = await createPost(title, filename, description, author, Number(categoryId));

    res.status(201).json({ success: true, message: newPost });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};


export const editPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, description, author, categoryId, status, outstanding } = req.body;
    let checkStatus = status === "true" ? true : false;
    let checkOutstanding = outstanding === "true" ? true : false;
    if (!id) {
      res.status(400).json({ success: false, message: "Thiếu trường id." });
      return;
    }

    if (!title) {
      res.status(400).json({ success: false, message: "Thiếu tiêu đề bài viết." });
      return;
    }

    if (!description) {
      res.status(400).json({ success: false, message: "Thiếu mô tả bài viết." });
      return;
    }

    if (!author) {
      res.status(400).json({ success: false, message: "Thiếu thông tin người viết." });
      return;
    }

    if (!categoryId) {
      res.status(400).json({ success: false, message: "Thiếu danh mục bài viết." });
      return;
    }

    if (status === undefined || status === null) {
      res.status(400).json({ success: false, message: "Thiếu trạng thái bài viết." });
      return;
    }

    if (outstanding === undefined || outstanding === null) {
      res.status(400).json({ success: false, message: "Thiếu nổi bật bài viết." });
      return;
    }

    let updatedImage = req.file ? req.file.filename : null;

    const updatedPost = await updatePost(id, title, updatedImage, description, author, Number(categoryId), checkStatus, checkOutstanding);

    res.status(200).json({ success: true, message: updatedPost });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const removePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePost(id);
    res.status(200).json({ success: true, message: deletedPost });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};
