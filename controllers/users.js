const Doodle = require('../models/doodle');
const ensureLoggedIn = require('../config/ensureLoggedIn');

module.exports = {
    getAll,
    showUser
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
        // const user = await User.
        const doodles = await Doodle.find({ createdBy: req.params.userId}).sort({ createdAt: "desc" }).lean();
        res.render('users/showUser', {title: "a", doodles})
    } catch (error) {
        console.log(error);
    }
}

