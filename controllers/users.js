const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users');
const { generateJWT } = require('../helpers/jwt');

const getUsers = async (req, res) => {

    const [users, total] = await Promise.all([
        User.find({}, 'name email'),
        User.countDocuments()
    ]);

    res.json({
        ok: true,
        users,
        total
    });

}

const createUser = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const emailExist = await User.findOne({ email });

        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: 'This email is already registered'
            });
        }

        const user = new User(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        //Guardar usuario
        await user.save();

        //Generar TOKEN - JWT
        const token = await generateJWT(user.id);

        res.json({
            ok: true,
            user,
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

module.exports = {
    getUsers,
    createUser
}