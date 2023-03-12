// Controlador de Blog

const fs = require('fs');

exports.index = function(req, res) {
    console.log('Entró al controlador de blog.index');
  // Leer el archivo posts.json
  const filePath = './public/blog.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(rawdata).postsData.posts;

  // Renderizar la plantilla EJS con el objeto de contexto que incluye las publicaciones
  res.render('blog', { title: 'Blog | Mohamed Hay | Consultorio psicológico', posts: posts, req });
};
