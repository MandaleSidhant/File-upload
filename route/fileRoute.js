const route = require('express').Router();
const fileCtrl = require('../controller/fileCtrl');
const upload= require('../middleware/upload')

route.get('/', fileCtrl.index);
route.get('/upload' , fileCtrl.upload);

route.post('/upload',upload,fileCtrl.fileUpload);



module.exports = route;