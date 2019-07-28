const express = require('express');
const server = express();
require('dotenv-safe').load();
const db = require('./config/knex');
const usersRepo = require('./repos/UserRepo');
const PostsRepo = require('./repos/PostsRepo');
server.use(express.json());
server.get('/', async (req, res) => {
    var string = { message: process.env.DB + 'a' }
    var users = await usersRepo.getAllusers();
    var posts = await PostsRepo.getAllPosts();
    res.send(posts);
/* 
    db('TB_USER').then( (data) =>{
        data.forEach(element => {
            users.push(element);
        });
        res.send(users);
    }
    ); */
    console.log(users);
    //res.send(users);
});


server.listen( 3000, () => {
    console.log('%s listening at %s', server.name, 3000);
});