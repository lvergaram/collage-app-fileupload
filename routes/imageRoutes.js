import { Router } from "express";
import { getForm, getCollage, uploadImage, deleteImage } from "../controllers/imageController.js";

const router = Router()

router.get("/", getForm)
router.get("/collage", getCollage)
router.post("/imagen", uploadImage)
router.get("/deleteImg/:imgName", deleteImage)


export default router;