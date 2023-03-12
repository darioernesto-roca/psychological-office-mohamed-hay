// Controller for post

const fs = require('fs');


exports.showPost = (req, res) => {
console.log('Ingresó a showPost');
  const postId = req.params['id'];
  const postsFile = './public/posts.json';
  
  fs.readFile(postsFile, (err, data) => {
    if (err) throw err;
    
    const posts = JSON.parse(data);
    const post = posts.find(post => post.id === postId);
    
    if (!post) {
      return res.status(404).send('Post not found');
    }
    
    res.render('post', { title: post.title, post: post });
  });
};
