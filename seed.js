const User = require('./models/User');
const mongoose = require('mongoose');

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
// const seedUsers = [
//         {
//             userName: 'Jacob',
//             email: 'Jacob@gmail.com',
//         },
//         {
//             userName: 'Alex',
//             email: 'Alex@gmail.com',
//         },
//         {
//             userName: 'Vehbi',
//             email: 'Vehbi@gmail.com',
//         },
//         {
//             userName: 'Drew',
//             email: 'Drew@gmail.com',
//         },
//     console.info('Seeding complete! 🌱')
// ];

// //inserting seed data
// const seedDB = async () => {
//     await User.insertMany(seedUsers)
// };
// // seeding DB then closing 
// seedDB().then(() => {
//     mongoose.connection.close();
// });

