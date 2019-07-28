db = require('../config/knex');

module.exports = {

    async getAllPosts() {
        var ret;

        await db('TB_POST').then(data => {
            ret = data;
        }).catch(err => {
            console.log(err);
            ret = false;
        });

        return ret;
    }
}