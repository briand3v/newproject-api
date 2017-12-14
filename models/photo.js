const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// http://mongoosejs.com/docs/schematypes.html
const ObjectId = mongoose.Schema.Types.ObjectId;

const PhotoSchema = new Schema({
    owner: {
        type: ObjectId,
        ref: 'User'
    },
    img: String,
    description: String,
    username: String,
    comments: [
        {
            owner: String,
            // {
            //     type: String,
            //     ref: 'User'
            // },
            description: String,

        }
    ]


}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Photo = mongoose.model("Photo", PhotoSchema);
module.exports = Photo;