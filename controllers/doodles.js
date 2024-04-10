const Doodle = require('../models/doodle');
const User = require('../models/user');
const cloudinary = require('../config/cloudinary');

module.exports = {
    create,
    getFeed,
    show,
    new: newDoodle,
}


async function getFeed(req, res) { // this return an array of doodles
    try {
        const doodles = await Doodle.find().sort({ createdAt: "desc" }).lean();
        res.render('doodles/index', { title: "Home", doodles, user: req.user })
    } catch (error) {
        console.log(error);
    }
}

async function show(req, res) {
    try {
        const doodle = await Doodle.findById(req.params.doodleId);
        res.render('doodles/show.ejs', { title: doodle.createdBy, doodle })
    } catch (error) {
        console.log(error);
    }
}

function newDoodle(req, res) {
    res.render('doodles/new', { title: 'New Doodle' });
}

async function create(req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const obj = {
            img: result.secure_url,
            cloudinaryId: result.public_id,
            createdBy: req.user.id,
            createdAt: result.created_at,
        }
        const doodle = await Doodle.create(obj)

        res.redirect(`/users/${req.user.id}`);

    } catch (error) {
        console.log("error creating doodle model");
        res.status(500).send("Error uploading doodle");;
    }
}
