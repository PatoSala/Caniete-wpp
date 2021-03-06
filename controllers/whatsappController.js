const db = require('../database/models');
const qrcode = require('qrcode-terminal');
const readXlsxFile = require('read-excel-file/node');
const nodemailer = require('nodemailer');
const { Client, MessageMedia } = require('whatsapp-web.js');

const clients = require('../clients');
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "psala@uade.edu.ar",
        pass: "Pumpulos21"
    }
});

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
            console.log(clients[idUser].info.me.user);
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

    sendMessage: (req, res) => {
        res.render('messageForm');
    },

    processMessage: (req, res) => {
        let idUser = req.session.userLogged.id;

        let file = req.files[0].filename;
        let img = undefined;
        let msg = req.body.msg;
        let phoneNumbers = [];
        let totalMessages = 0;

        if (req.files[1]) {
            img = req.files[1].filename;
        };

        readXlsxFile(__dirname + '/../public/files/' + file).then(rows => {
            for (let i = 1; i < rows.length; i++) {
                phoneNumbers.push(rows[i][5]);
            }

            phoneNumbers.forEach(phone => {
                phone = "" + phone + "";
                wppFormat = "549" + phone.substring(0,1) + "1" + phone.substring(2) + "@c.us";
    
                if (img != undefined) {
                    let media = MessageMedia.fromFilePath(__dirname + '/../public/files/' + img);
                    clients[idUser].sendMessage(wppFormat, media, { caption: msg });
                    totalMessages += 1;
                } else {
                    clients[idUser].sendMessage(wppFormat, msg);
                    totalMessages += 1;
                }
            });
    
            let emailData = {
                from: "psala@uade.edu.ar",
                to: "patosala998@gmail.com",
                subject: "Total messages notification",
                text: "Se enviaron un total de " + totalMessages + " mensajes desde el n??mero " + clients[idUser].info.me.user,
            }
            
            transporter.sendMail(emailData);
            res.render("sentMessages", {totalMessages});
        });

        
    }

}

module.exports = whatsappController;