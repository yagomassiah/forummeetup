const express = require("express");
const server = express();
const db = require("./config/knex");
const usersRepo = require("./repos/UserRepo");

// Carregando variaveis de ambiente
require("dotenv-safe").config();

// Porta
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.get("/", async (req, res) => {
  var string = { message: process.env.DB + "a" };
  var users = await usersRepo.getAllusers();
  var posts = await PostsRepo.getAllPosts();
  res.send(posts);

  //res.send(users);
});

// Rotas
const postsRoute = require("./routes/Posts");
server.use("/posts", postsRoute);

const userRoute = require("./routes/User");
server.use("/users", userRoute);

const commentsRoute = require("./routes/Comments");
server.use("/comments", commentsRoute);

server.listen(PORT, () => {
  console.log(`%s listening at %s ${PORT}`);
});
