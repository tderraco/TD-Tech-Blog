const { Post } = require('../models');

const postData = [{
        title: 'Up All Night',
        content: 'I start my day at 5:30 am and end my day finally around 12:30 pm',
        user_id: 1

    },
    {
        title: 'Not feeling well',
        content: 'Hung out with a ferverish kindergartener. I think I caught cooties',
        user_id: 2
    },
    {
        title: 'Always Hungry',
        content: 'I like to eat my pbj with flaming hot fritos',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;