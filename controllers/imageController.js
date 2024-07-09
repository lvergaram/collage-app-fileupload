//ES6
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const getForm = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/formulario.html"))
}

export const getCollage = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/collage.html"))
}

export const uploadImage = (req, res) => {
    try { 
           const { target_file } = req.files; 
           const { posicion } = req.body;
           target_file.mv(path.join(__dirname, "../public/imgs", `imagen-${posicion}.jpg`), (err) => {
            if(err) res.status(500).send(err);
            res.redirect("/collage")
           })


    } catch(error){
        res.status(500).send("Algo salió mal en la carga de la imagen.")
    }
}

export const deleteImage = async (req, res) => {
    try {
      const { imgName } = req.params;
      await fs.unlink(path.join(__dirname, "../public/imgs", imgName));
      res.sendFile(path.join(__dirname, "../public/collage.html"));
    } catch (error) {
      res.status(500).send(error.message);
    }
}
