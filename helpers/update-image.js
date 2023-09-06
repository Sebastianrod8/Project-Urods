const fs = require('fs');
const Product = require('../models/product');

const deleteImagen = (path) => {
    if (fs.existsSync(path)) {
        // Borrar la imagen anterior
        fs.unlinkSync(path);
    }
}

const updateImage = async (id, fileName) => {
    let oldPath = '';
    const product = await Product.findById(id);
    if (!product) {
        console.log('Product not found');
        return false;
    }

    oldPath = `./uploads/products/${product.img}`;
    deleteImagen(oldPath);

    product.img = fileName;
    await product.save();
    return true;
}


module.exports = {
    updateImage
}