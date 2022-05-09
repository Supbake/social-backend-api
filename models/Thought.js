const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        // reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Thought = model('thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought.find({}).exec((err, collection) => {
    if (err) {
        return handleError(err);
    }
    if (collection.length === 0) {
        return Thought.insertMany(
            [
                {
                    thoughtText: "Find me a Shrubberry",
                    userName: "Jacob",
                    // userId: "62785acfb4f310321b208fba"
                },
                {
                    thoughtText: "We are the Knights that say Nee",
                    userName: "Alex",
                    // userId: "62785acfb4f310321b208fbb"
                },
                {
                    thoughtText: "...and what do we do with Witches",
                    userName: "Vehbi",
                    // userId: "62785acfb4f310321b208fbc"
                },
                {
                    thoughtText: "It's but a flesh wound",
                    userName: "Drew",
                    // userId: "62785acfb4f310321b208fbd"
                },
            ],
            (insertError) =>
                insertError ? handleError(insertError) : console.log('Inserted')
        );
    }
    return console.log('Already populated');
});

module.exports = Thought;