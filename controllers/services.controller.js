// Controller for services

exports.index = function (req, res) {
  console.log("Entró al controlador de blog.services");
  res.render("services", {
    title: "Servicios | Mohamed Hay | Consultorio psicológico",
  });
};
