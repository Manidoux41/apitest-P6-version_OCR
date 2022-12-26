const mongoose = require('mongoose');

const SauceSchema = new mongoose.Schema({
    name: { type: String, req: true },
    manufacturer: { type: String, req: true },
    description: { type: String, req: true },
    imageUrl: { type: String, req: true },
    mainPepper: { type: String, req: true },
    userId: { type: String, req: true },
    heat: { type: Number, req: true },
    likes: { type: Number, req: true, default: 0 },
    dislikes: { type: Number, req: true, default: 0 },
    usersLiked: { type: [String], req: true, default: [] },
    usersDisliked: { type: [String], req: true, default: [] },
  });

module.exports = mongoose.model('Sauce', SauceSchema);