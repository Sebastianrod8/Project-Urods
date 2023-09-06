const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        //Verificar email
        const userDB = await User.findOne({ email });
        if (!userDB) {
            res.status(404).json({
                ok: false,
                msg: 'The user cannot be found'
            });
        }

        //Verificar contraseña
        const validPassword = bcrypt.compareSync(password, userDB.password);
        if (!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'Invalid password'
            });
        }

        //Generar TOKEN - JWT
        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
}

const renewToken = async (req, res = response) => {

    const uid = req.uid;

    //Generar TOKEN - JWT
    const token = await generateJWT(uid);

    //Obtener el usuario por UID
    const user = await User.findById(uid);

    res.json({
        ok: true,
        token,
        user
    });

}

module.exports = {
    login,
    renewToken
}