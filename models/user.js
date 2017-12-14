

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },
    profileName: String,
    profileImg: String,
    title: String,
    description: String,
    firstName: String,
    lastName: String,
    email: String,

},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

UserSchema.methods.asData = function () {
    return {
        id: this._id,
        username: this.username,
        profileName: this.profileName
        // profileImg: this.profileImg,
        // title: this.title,
        // description: this.description

    };
};

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
};