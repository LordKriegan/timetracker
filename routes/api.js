const router = require('express').Router();
const parser = require('../parser/parser');
router.post("/parsexlsx", (req, res) => {
    const file = req.files.file;
    const fileName = "./uploads/" + file.name.split(" ").join("_") + Date.now();
    file
        .mv(fileName)
        .then((response) => {
            res.json(parser(fileName))
        }).catch((error) => {
            console.error(error);
            res.status(500).json({
                msg: "Error while trying to save file",
                error: err
            })
        })
})

module.exports = router;