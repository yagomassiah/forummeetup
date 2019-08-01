//const PostsRepo = require('../repos/PostsRepo');
const PostService = require('../services/PostService');
module.exports = (server) => {
   
   /**
    * Post post
    */
    server.post('/posts',  async (req, res) => {

        var body = req.body;
    
        var post = await PostService.postPost(body);
    
        res.send(post);
    
    
    });

    /**
     * Get all artistas route
     */
    server.get('/posts', async (req, res) => {

        var ret = await PostService.getAllPosts();

        res.send(ret);
    });

    server.delete('/posts/:id', async (req, res) => {

        var ret = await PostService.deletePost(req.params.id);
        if(ret){
            console.log(ret);
            ret = {message: "sucesso"}
        }else if(!ret){
            res.statusCode = 500;
            res.send({message: "erro interno"});
        }
        res.send(ret);
    });

    server.put('/posts/:id', async (req, res) => {
        var ret = await PostService.updatePost(req.params.id, req.body);

        res.send(ret);
    })

}