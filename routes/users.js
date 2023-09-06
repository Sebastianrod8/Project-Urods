/**
 * Ruta: /api/users    --> Este va a ser el endopint del servico
 */

const { Router } = require('express');              //Nos permite crear las diferentes rutas
const { check } = require('express-validator');  // Controlador para enviar la respuesta
const { validateFields } = require('../middelwares/validate-fields');
const { getUsers, createUser } = require('../controllers/users');
const { validateJWT } = require('../middelwares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getUsers);

router.post('/',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('password', 'The password is required').not().isEmpty(),
        check('email', 'The email es required').isEmail(),
        validateFields
    ], 
    createUser
);

module.exports = router;