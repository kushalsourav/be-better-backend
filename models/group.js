const mongoose = require('mongoose');

const {Schema } = mongoose;

const groupSchema = new Schema({
    title: String,
    code : Number,
    date : {type: Date, default: Date.now()}
})

const Group =  mongoose.model('Group', groupSchema);

module.exports = Group;