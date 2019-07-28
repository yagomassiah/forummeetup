db = require('../config/knex');

module.exports = {

    async getAllusers() {
        var ret;
        await db('TB_USER').then((data) => {
            console.log(data);
            ret = data;
        }).catch(err => {
            console.log(err)
            ret = err;
        })
        
        return ret;
    }


};