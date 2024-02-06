const express = require("express");
const controllers = require("../controller/controller");
const router = express.Router();

let prefix = 'api/v1/blog-image'
router
    .get(`/${prefix}`, controllers.all)
    // .get(`/${prefix}`, controllers.allSearch)
    .post(`/${prefix}/store`, controllers.store)
    .post(`/${prefix}/delete`, controllers.delete)
    .post(`/${prefix}/restore`, controllers.restore)
    .post(`/${prefix}/destroy`, controllers.destroy)
    
    .post(`/${prefix}/update`, controllers.update)
    .get(`/${prefix}/details/:id`, controllers.get);


module.exports = () => router;