const jwt = require('jsonwebtoken');


/** USO DE JSON WEB TOKEN PARA MANEJO DE LA AUTENTICACIÒN */

const validateJWT = (req, res, next) => {

    //Leer el token
    const token = req.header('x-token');
    console.log(token);

    if (!token) {
        res.status(401).json({
            ok: false,
            msg: 'Token not found'
        });
    }

    try {
        const { uid } = jwt.verify(token, "jweroi324324@#¢@#jsdjou445@45");     //Random secret key
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }
}

module.exports = {
    validateJWT
}