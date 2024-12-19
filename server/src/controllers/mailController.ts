import { Request, Response } from "express";
import { sendInformationEmail } from "../utils/smsEmail";
import { createMail, deleteMail, getMailID, getMails } from "../services/mailService";

export const createSendMail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, content } = req.body;
        await sendInformationEmail(name, email, content);
        await createMail(name, email, content)
        res.status(200).json({
            success: true,
            message: "Email đã được gửi thành công",
        });
    } catch (error: any) {

        console.error(error);
        console.error(error);
        res.status(400).json({ success: false, message: error.message });

    }
};
export const getMailInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const resData = await getMails()
        res.status(200).json({
            success: true,
            message: resData,
        });
    } catch (error: any) {

        console.error(error);
        console.error(error);
        res.status(400).json({ success: false, message: error.message });

    }
};

export const getMailInfoID = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const resData = await getMailID(id)
        res.status(200).json({
            success: true,
            message: resData,
        });
    } catch (error: any) {

        console.error(error);
        console.error(error);
        res.status(400).json({ success: false, message: error.message });

    }
};

export const removeContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteContact = await deleteMail(id);
        res.status(200).json({ success: true, message: deleteContact });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};
