import express from "express";
import categoryRoutes from "./categoryRoutes";
import postRoutes from "./postRoutes";
import commentRoutes from "./commentRoutes";
import fileRoutes from "./fileRouters";
import mailRoutes from "./mailRoutes";
import authRoutes from "./authRoutes";
const RootRouter = express();

RootRouter.use("/categories", categoryRoutes)
RootRouter.use("/posts", postRoutes)
RootRouter.use("/comment", commentRoutes)
RootRouter.use("/image", fileRoutes)
RootRouter.use("/mail", mailRoutes)
RootRouter.use("/auth", authRoutes)
RootRouter.get("/", (req, res) => {
  res.json({ exp: Math.floor(Date.now() / 1000) });
});

export default RootRouter;
