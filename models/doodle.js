const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema 
const doodleSchema = new Schema({

}, {
// automatically adds createdAt and updatedAt fields to every document
    timestamps: true
});

// Compile the schema into a model, and export the model.
module.exports = mongoose.model('Doodle', doodleSchema);