const Doodle = require('../models/doodle');
const ensureLoggedIn = require('../config/ensureLoggedIn');


module.exports = {
    getAll,
}

async function getAll(req, res) {
    try {
        const doodles = await Doodle.find({ createdBy: req.user.id}).sort({ createdAt: "desc" }).lean();
        res.render('users/show', {title: req.user.name, doodles})
    } catch (error) {
        console.log(error);
    }
}

async function showUser(req , res) {
    try {
        const doodles = await Doodle.find({ createdBy: req.user.id}).sort({ createdAt: "desc" }).lean();
        res.render('users/show', {title: req.user.name, doodles})
    } catch (error) {
        console.log(error);
    }
}