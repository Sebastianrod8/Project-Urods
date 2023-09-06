const jwt = require('jsonwebtoken');

/** USO DE JSON WEB TOKEN PARA MANEJO DE LA AUTENTICACIÒN */

const generateJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, "jweroi324324@#¢@#jsdjou445@45", {        //Random secret key
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("Error generating the JWT. Error: ", err);
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generateJWT
}