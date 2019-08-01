const UserRepo = require('../repos/UserRepo');

module.exports = (server) => {
   
   /**
    * Post post
    */
    server.post('/posts',  async (req, res) => {

        var body = req.body;
    
        var id = await PostsRepo.postPost(body);
    
        res.send(id);
    
    
    });
   
   
    /**
     * Get all artistas route
     */
    server.get('/api/artistas/', async (req, res, next) => {

        var ret = await artistaServices.getAllArtistas(knex, res);
        res.send(ret);
    });

}