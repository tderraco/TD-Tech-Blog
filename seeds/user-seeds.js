const { User } = require('../models');

const userData = [{
        username: 'Tracy',
        password: 'Tracy1'

    },
    {
        username: 'Josh',
        password: 'Josh1'
    },
    {
        username: 'Poema',
        password: 'Poema1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;