const { ObjectId } = require('mongoose').Types;
const Thought = require('../models/Thought');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(async (thought) => {
                const thoughtObj = {
                    thought,
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },





};