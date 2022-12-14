import { Router } from "express";
import * as admin from "../controllers/admin";

import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import { storage } from "../middleware/multer";

const multerOption = {
  fileFilter: function (
    req: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
  ) {
    const ext = path.extname(file.originalname);
    if (ext !== ".pdf") {
      return callback(null, false);
    }
    callback(null, true);
  },
  storage,
};

const upload = multer(multerOption);

export const router = Router();

router.post("/signin", admin.signIn);

router.post(
  "/signup",
  upload.fields([
    { name: "pirt", maxCount: 1 },
    { name: "halal", maxCount: 1 },
  ]),
  admin.signUp
);

router.get("/signout", admin.signOut);

router.put("/", admin.updateAdmin);

// API
router.get("/", admin.readAdmin);
