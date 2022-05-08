const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            //trimmed??
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //matching validation in mongoose??
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
);
//     {
//         toJSON: {
//             virtuals: true,
//         },
//         id: false,
//     }
// );

const User = model('user', userSchema);

module.exports = User;
