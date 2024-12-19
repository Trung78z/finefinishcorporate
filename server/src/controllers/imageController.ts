import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const getImage = (req: Request, res: Response) => {
  const { filename } = req.params;

  let filePath = "";
  filePath = path.join(__dirname, '..','..', 'public', 'images',`${filename}`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, message: "File not found" });
    }
    res.sendFile(filePath);
  });
};
