const express = require('express');
const server = express();
require('dotenv-safe').load();
const db = require('./config/knex');
const usersRepo = require('./repos/UserRepo');

server.use(express.json());
server.get('/', async (req, res) => {
    var string = { message: process.env.DB + 'a' }
    var users = await usersRepo.getAllusers();
    var posts = await PostsRepo.getAllPosts();
    res.send(posts);

   
    //res.send(users);
});

require('./routes/Posts')(server);

require('./routes/User')(server);

require('./routes/Comments')(server);



server.listen(3000, () => {
    console.log('%s listening at %s', server.name, 3000);
});