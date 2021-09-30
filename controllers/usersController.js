const db = require('../database/models');

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

        res.redirect('/users/login');
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

    }

}

module.exports = usersController;