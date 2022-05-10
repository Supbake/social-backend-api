const { Schema, model, Types } = require('mongoose');
// reaction schema 
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            default: new Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

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
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);


const Thought = model('Thought', thoughtSchema);

const Reaction = model('Reaction', reactionSchema);

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
                    reactions: [ { reactionBody: 'A What?', userName: 'Jacob' } ],
                },
                {
                    thoughtText: "We are the Knights that say Nee",
                    userName: "Alex",
                    reactions: { reactionBody: 'The Knights that say Nee?', userName: 'Alex' },
                },
                {
                    thoughtText: "...and what do we do with Witches",
                    userName: "Vehbi",
                    reactions: { reactionBody: '...burn them?', userName: 'Vehbi' },
                },
                {
                    thoughtText: "It's but a flesh wound",
                    userName: "Drew",
                    reactions: { reactionBody: 'Oh come on now...', userName: 'Drew' },
                },
            ],
            (insertError) =>
                insertError ? handleError(insertError) : console.log('Inserted')
        );
    }
    return console.log('Already populated');
});

module.exports = Thought, Reaction;