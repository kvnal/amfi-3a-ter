const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    },
    youtube: {
        required: true,
        type: String
    },
    instagram: {
        required: true,
        type: String
    },
    youtube_channel_id: {
        required: true,
        type: String
    },
    about: {
        required: true,
        type: String
    },

}, { timestamps: true });

const contentSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    utID: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    likes: {
        default : 0,
        type: Number
    },
    episodes: {
        required: true,
        type: Array
    },
    creator: {
        required: true,
        type: Array
    }
},
    { timestamps: true }
);

const siteSchema = new mongoose.Schema({
    visits: {
        default : 0,
        type: Number
    },
    total_likes: {
        default : 0,
        type: Number
    }
});

const creator = mongoose.model("creator", creatorSchema);
const content = mongoose.model("content", contentSchema);
const site = mongoose.model("site", siteSchema);
module.exports = { site, content, creator };