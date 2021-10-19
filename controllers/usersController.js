const db = require('../database/models');
const clients = require('../clients');

usersController = {

    registerForm: (req, res) => {
        res.render("users/registerForm");
    },

    registerProcess: (req, res) => {

        let newUser = new Object();

        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        db.Users.create(newUser).then(
            user => {
                console.log(user);
            }
        );

        res.redirect('/login');
    },

    loginForm: (req, res) => {
        res.render("users/loginForm");
    },

    loginProcess: (req, res) => {
        
        db.Users.findOne({
            where: {
                email: req.body.email,
            }
        }).then(userFound => {
            if (req.body.password == userFound.password) {
                req.session.userLogged = userFound;
                res.redirect('/');
            }
        })

    },

    logOut: (req, res) => {
        let idUser = req.session.userLogged.id;

        if (clients[idUser]) {
            delete clients[idUser];
            console.log("Client session ended!");
        }

        req.session.userLogged = undefined;

        res.redirect('/');
    }

}

module.exports = usersController;