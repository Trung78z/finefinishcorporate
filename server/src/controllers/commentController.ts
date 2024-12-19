import { Request, Response } from "express";
import {
    createComment,
    deleteComment
} from "../services/commentService";

export const addComment = async (req: Request, res: Response) => {
    try {
        const { email, name, content, postId } = req.body;
        const newPost = await createComment(email, name, content, postId);
        res.status(201).json({ success: true, message: newPost });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const removeComment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteContact = await deleteComment(id);
        res.status(200).json({ success: true, message: deleteContact });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};
