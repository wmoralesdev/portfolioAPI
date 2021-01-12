const Post = require('../../models/PostModel')
const User = require('../../models/UserModel')

var PostController = {
    createPost: async(req, res) => {
        try{
            var user = await User.findOne({_id: req.user._id})

            var post = new Post({
                text: req.body.text,
                author: user.username,
                author_id: user._id
            })

            await post.save();
            return res.status(201).json({error: false, message: "Post created"})
        }
        catch(err) {
            console.log(err);
            return res.status(400).json({error: true, message: JSON.stringify(err)})
        }
    }
}

module.exports = PostController