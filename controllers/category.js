const { response } = require('express');
const category = require('../models/category');
const Category = require('../models/category');
//const { generateJWT } = require('../helpers/jwt');

const getCategory = async (req, res) => {

    const [category, total] = await Promise.all([
        Category.find({}, 'name'),
        Category.countDocuments()
    ]);

    res.json({
        ok: true,
        category,
        total
    });

}

const createCategory = async (req, res = response) => {

    const { email } = req.body;

    try {

        const category = new Category(req.body);

        //Guardar category
        await category.save();

        res.json({
            ok: true,
            category,
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
    getCategory,
    createCategory
}