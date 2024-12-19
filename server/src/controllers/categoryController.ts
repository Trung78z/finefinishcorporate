import { Request, Response } from "express";
import {
    findCategories,
    findCategoryByName,
    createCategory,
    editCategory,
    deleteCategory,
} from "../services/categoryService";

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await findCategories();
        res.status(200).json({ success: true, message: categories });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getCategoryByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const category = await findCategoryByName(name);
        res.status(200).json({ success: true, message: category });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const addCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const category = await createCategory(name);
        res.status(201).json({ success: true, message: category });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await editCategory(Number(id), name);
        res.status(200).json({ success: true, message: category });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const removeCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const category = await deleteCategory(Number(id));
        res.status(200).json({ success: true, message: category });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};
