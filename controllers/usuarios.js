const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
  
   // const query = req.query;
   const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
  
    res.json({
        msg: 'get API - controlador ',
        q,
        nombre,
        apikey,
        page,
        limit
        //query
    });
  }


  const usuariosPost = (req, res = response) => {

    //const body = req.body;
    const { nombre, edad } = req.body;  // Destructuring ayuda a Validar

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
        //body
    });
  }

  const usuariosPut =  (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
  }

  const usuariosPatch =  (req, res = response) => {
    res.json({
        msg: 'pacth API - controlador'
    });
  }


  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
  }

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }