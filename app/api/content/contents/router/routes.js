const express = require("express");
const controllers = require("../controller/controller");
const router = express.Router();

// router.use('/api/v1');

// router.get('s',async function(req,res,next){
//     let users = await userModel.find().exec();
//     return res.json({data:users});
// })

let prefix = 'api/v1/content'
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