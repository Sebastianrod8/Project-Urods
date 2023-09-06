const { Schema, model } = require('mongoose');      // Funcitions mongoose DB

const CategorySchema = Schema({
    name: {                         // user input
        type: String,
        required: true
    }
});

CategorySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;               // id creatiion for ea
    return object;
})

module.exports = model('Category', CategorySchema);
