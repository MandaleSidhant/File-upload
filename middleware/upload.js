const multer=require('multer');
const path =require('path');

/* setting up storage */
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function (req,file,cb) {
        cb(null,`${new Date().getDate().toString()}-${file.fieldname}${path.extname(file.originalname)}` )
    }
});

/* validation */

/* upload logic */
const upload =multer({
    storage:storage,
    limits: {fileSize: 20 * 1024 * 1024}
}).single('file');

module.exports = upload;