const Doodle = require('../models/doodle');

module.exports = {
    create,
    delete: deleteComment,
}

async function create(req, res) {
    const doodle = await Doodle.findById(req.params.doodleId);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    doodle.comments.push(req.body);

    try {
        await doodle.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/doodles/${doodle._id}`);
}

async function deleteComment(req, res) {
    const doodle = await Doodle.findOne({ 'comments._id': req.params.commentId, 'comments.user': req.user._id });
    if (!doodle) return res.redirect('/doodles');
    doodle.comments.remove(req.params.commentId);
    await doodle.save();
    res.redirect(`/doodles/${doodle._id}`);

}


