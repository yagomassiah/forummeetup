module.exports = {

    async getComentarioByPostId(postId) {
        var ret;

        await db('TB_COMENTARIO').where('id_post', postId).then(data => {
            ret = data;
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    },

    async postComentario( body) {
        var ret;
        await db('TB_COMENTARIO').insert(body).then(async data => {
            await db('TB_COMENTARIO').where('id_comentario', data).then(resposta => {
                ret = resposta[0];
            }).catch(err => {
                console.log(err);
                ret = false;
            })
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    },

    
    async deleteComentario(comentarioId) {
        var ret;

        await db('TB_COMENTARIO').where('id_comentario', comentarioId).del().then(data => {
            ret = data;
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    },

    async updateComentario(comentarioId, body) {
        var ret;
        console.log("debugss");
        console.log(body);

        console.log(comentarioId);
        await db('TB_COMENTARIO').where('id_comentario', comentarioId).update(body).then(async data => {
            await db('TB_COMENTARIO').where('id_comentario', comentarioId).then(data => {
                ret = data;
            }).catch(err => {
                console.log(err)
                ret = false;
            })
        }).catch(err => {
            console.log(err);
            ret = false;
        });
        console.log(ret);
        return ret;
    }
}