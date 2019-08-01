const PostsRepo = require('../repos/PostsRepo');

module.exports = {

    async getAllPosts () {

        var posts = await PostsRepo.getAllPosts();

        return posts;

    },

    async postPost (body) {
        var post = await PostsRepo.postPost(body)

        return post;
    },

    async deletePost(postId){

        var result = await PostsRepo.deletePost(postId);

        return result;
    },

    async updatePost(postId, body){
        var ret = await PostsRepo.updatePost(postId, body);
        
        return ret;
    }


}