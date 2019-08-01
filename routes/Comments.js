const PostsRepo = require('../repos/PostsRepo');
const comentarioServices = require('../services/ComentarioServices');
module.exports = (server) => {

    /**
     * Post post
     */
    server.post('/comentarios', async (req, res) => {

        var body = req.body;

        var comentario = await comentarioServices.postComentario(body);

        res.send(comentario);


    });

    server.get('/comentarios/post/:id', async (req, res) => {

        var ret = await comentarioServices.getComentarioByPostId(req.params.id)

        if (!ret)
            res.status(500).send({message: "Erro interno do servidor"});
        else{
            res.send(ret);
        }
    });

  

    server.delete('/comentarios/:id', async (req, res) => {

        var ret = await comentarioServices.deleteComentario(req.params.id);
        if(ret){
            console.log(ret);
            ret = {message: "sucesso"}
        }else if(!ret){
            res.statusCode = 404;
            res.send({message: "Não encontrado"});
        }
        res.send(ret);
    });
  
    server.put('/comentarios/:id', async (req, res) => {
      //  res.send({teste:'teste'});
        var ret = await comentarioServices.updateComentario(req.params.id, req.body);

        res.send(ret);
    })

}