module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';

    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(255)
        },
        email: {
            type: dataTypes.STRING(255)
        },
        password: {
            type: dataTypes.STRING(255)
        },
        wpp_session: {
            type: dataTypes.STRING(500)
        },
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}