const comentarioRepo = require('../repos/CommentRepo');

module.exports = {

    async getComentarioByPostId (postId){
        var comentario =  await comentarioRepo.getComentarioByPostId(postId);

        return comentario;
    },

    async postComentario(body) {
        var comentario =  await comentarioRepo.postComentario(body);

        return comentario;
    },

    async deleteComentario(comentarioId){

        var result = await comentarioRepo.deleteComentario(comentarioId);

        return result;
    },

    async updateComentario(comentarioId, body){
        var ret = await comentarioRepo.updateComentario(comentarioId, body);
        
        return ret;
    }


}