db = require('../config/knex');

module.exports = {

    async getAllPosts() {
        var ret;

        await db('TB_POST').then(data => {
            ret = data;
        }).catch(err => {
            console.log(err.error);
            ret = false;
        });

        return ret;
    },

    async postPost(body) {
        var ret;

        await db('TB_POST').insert(body).then(async (id) => {
            console.log("id do post novo: " + id);
            ret = id;
            await db('TB_POST').where('id_post', id).then(data => {
                ret = data[0];
            }).catch(err => {
                console.log(err)
                ret = false;
            })
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    },


    async deletePost(PostId) {
        var ret;

        await db('TB_POST').where('id_post', PostId).del().then(data => {
            ret = data;
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    },

    async updatePost(postId, body) {
        var ret;
        await db('TB_POST').where('id_post', postId).update(body).then(async data => {
            await db('TB_POST').where('id_post', postId).then(data => {
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