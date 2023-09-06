const { Schema, model } = require('mongoose');      // Funcitions mongoose DB

const InventorySchema = Schema({
    name: {                         // user input
        type: String,
        required: true
    },
    category: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

InventorySchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;               // id creatiion for ea
    return object;
})

module.exports = model('Inventory', InventorySchema);