const express = require("express");
const router = express.Router();

const whatsappController = require("../controllers/whatsappController");

router.get("/init", whatsappController.init);