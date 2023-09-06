/**
 * Route: /api/login
 */

const { Router } = require('express');
const { login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middelwares/validate-fields');
const { validateJWT } = require('../middelwares/validate-jwt');

const router = Router();

router.post('/',
    [
        check('email', 'The email is required').isEmail(),
        check('password', 'The email is required').not().isEmpty(),
        validateFields
    ],
    login
);

router.get('/renew',
    validateJWT,
    renewToken
);


module.exports = router;