const { Client, MessageMedia } = require('whatsapp-web.js');

whatsappController = {
    init: (req, res) => {
        res.send("wpp Client!");
    }
}

module.exports = whatsappController;