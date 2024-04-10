const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true,
})

const doodleSchema = new Schema({
    img: { //cloudinary link res.cloudinary.com/... you can just plug in the <a> href
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    comments: [commentSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Doodle', doodleSchema);