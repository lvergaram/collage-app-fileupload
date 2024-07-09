import express from "express";
import dotenv from "dotenv";
import fileUploadConfig from "./utils/fileUploadConfig.js";
import imageRoutes from "./routes/imageRoutes.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor levantado ${PORT}`))
app.use(express.static("public"))

app.use(fileUploadConfig)

app.use("/", imageRoutes)