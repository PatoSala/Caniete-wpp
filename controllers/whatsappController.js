const db = require('../database/models');
const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

const clients = require('../clients');

whatsappController = {
    init: (req, res) => {
        let idUser = req.session.userLogged.id;

        let sessionData;

        if (req.session.userLogged.wpp_session != "") {
            sessionData = JSON.parse(req.session.userLogged.wpp_session);
        };

        clients[idUser] = new Client({
            session: sessionData
        });

        clients[idUser].on('qr', qr => {
            qrcode.generate(qr, {small: true});
            res.render('qr', {qr});
        });
        
        clients[idUser].on('ready', () => {
            console.log('Client is ready! Welcome ' + clients[idUser].info.pushname);
            res.redirect('/');
        });

        clients[idUser].on('authenticated', (session) => {
            let JSONsession = JSON.stringify(session);

            db.Users.update({
                wpp_session: JSONsession
            }, {
                where: {
                    id: idUser
                }
            });
        });

        clients[idUser].initialize();
    },

}

module.exports = whatsappController;