
import * as userService from "../services/userService"
import { Request, Response } from "express"; import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../helpers/tokenHelpers";
export const registerController = async (req: Request, res: Response) => {
    try {
        const { fullName,
            email,
            password,
            username } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        const user = await userService.createUser(fullName,
            email,
            passwordHash,
            username);

        res.status(200).json({ success: true, message: user });
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};


export const loginController = async (req: Request, res: Response) => {
    try {
        const {
            password,
            username } = req.body;
        const user = await userService.findUserName(username);
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
        }
        else {
            if (!user.password) {
                res.status(401).json({ success: false, message: "Password not valid" });
            }
            else {
                const comparePassword = bcrypt.compareSync(password, user.password);
                if (!comparePassword) {
                    res.status(401).json({
                        success: false,
                        message: "Password not match",
                    });
                }

                else {
                    const accessToken = generateAccessToken({
                        id: user.id

                    });
                    const refreshToken = generateRefreshToken({
                        id: user.id,

                    });
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                    });

                    res.json({
                        success: true,
                        message: {
                            accessToken: accessToken,
                            id: user.id,

                        },
                    });
                }
            }

        }
    } catch (error: any) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const refreshToken = async (req: Request, res: Response) => {

    try {
        const { refreshToken } = req.cookies;
        const payload = verifyRefreshToken(refreshToken);
        if (!payload) {
            res.status(401).json({
                success: false,
                message: "refreshToken invalid!",
            });
        }

        else {
            const accessToken = generateAccessToken({
                id: payload.id,

            });
            res.json({
                success: true,
                message: {
                    id: payload.id,
                    accessToken: accessToken,
                },
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const clearToken = async (req: Request, res: Response) => {
    try {
        res.clearCookie("refreshToken");
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }


};
