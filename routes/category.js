/**
 * Ruta: /api/category    --> Este va a ser el endopint del servico
 */

const { Router } = require('express');              //Nos permite crear las diferentes rutas
const { check } = require('express-validator');  // Controlador para enviar la respuesta
const { validateFields } = require('../middelwares/validate-fields');
const { getCategory, createCategory } = require('../controllers/category');
const { validateJWT } = require('../middelwares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getCategory);

router.post('/',
    [
        check('name', 'The name is required').not().isEmpty(),
        validateFields
    ], 
    createCategory
);

module.exports = router;