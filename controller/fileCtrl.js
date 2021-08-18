const FileModel = require('../model/filemodel');

const fileCtrl = {
    index: (req,res) => {
        res.render('index.pug');
    },
    upload :(req,res) => {
        res.render('upload.pug');
    },
    fileUpload: async (req,res) => {
        try {
             const file = new FileModel(req.file);
             console.log('file info =' ,file);
             await file.save();
             console.log('file created sucessfully');
             res.redirect('/');
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports =fileCtrl;
