const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/files');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});
/* const cpUpload = upload.fields([{ name: 'file' }, { name: 'img' }]);  */  


const whatsappController = require("../controllers/whatsappController");

router.get("/init", whatsappController.init);

router.get('/sendmessage', whatsappController.sendMessage);

router.post('/sendmessage', upload.any(), whatsappController.processMessage);

module.exports = router;