const Doodle = require('../models/doodle');
const User = require('../models/user');
const cloudinary = require('../config/cloudinary');

module.exports = {
    create,
    getFeed,
    show,
}

function create(req, res) {
    return;
}

async function getFeed(req, res) { // this return an array of doodles
    try {
        const doodles = await Doodle.find().sort({ createdAt: "desc" }).lean();
        res.render('doodles/index', { title: "Feed", doodles})
    } catch (error) {
        console.log(error);
    }
}

async function show(req, res) {
    try{
        const doodle = await Doodle.findById(req.params.id);
    } catch (error) {
        console.log(error);
    }
}

