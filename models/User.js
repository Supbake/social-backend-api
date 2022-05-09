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
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

const handleError = (err) => console.error(err);

User.find({}).exec((err, collection) => {
    if (err) {
        return handleError(err);
    }
    if (collection.length === 0) {
        return User.insertMany(
            [
                {
                    userName: 'Jacob',
                    email: 'Jacob@gmail.com',
                },
                {
                    userName: 'Alex',
                    email: 'Alex@gmail.com',
                },
                {
                    userName: 'Vehbi',
                    email: 'Vehbi@gmail.com',
                },
                {
                    userName: 'Drew',
                    email: 'Drew@gmail.com',
                },
            ],
            (insertError) =>
                insertError ? handleError(insertError) : console.log('Inserted')
        );
    }
    return console.log('Already populated');
});

module.exports = User;
