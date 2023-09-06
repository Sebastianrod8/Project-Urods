const { Schema, model } = require('mongoose');      // Funcitions mongoose DB

const UserSchema = Schema({
    name: {                         // user input
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;               // id creatiion for each user
    return object;
})

module.exports = model('User', UserSchema);