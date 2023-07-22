const router = require("express").Router();
const multer = require("multer");
const Gallery = require("../models/Gallery");


/*const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp/uploads');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype ="";
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpeg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});
const upload = multer({storage: storage});

router.post('/profile', upload.single('file'),function
  (req, res, next){
  try {
    if (!req.file) {
      return res.status(500).send({message: "Upload fail"});
    } else {
      req.body.imageUrl = "http://192.168.0.7:3000/images" + req.file.filename;
      Gallery.create(req.body, function (err, gallery) {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          res.json(gallery);
        }

      })
    }
  }
    catch (err) {
      res.status(400).json(err);
    }

})
module.exports = router; */
