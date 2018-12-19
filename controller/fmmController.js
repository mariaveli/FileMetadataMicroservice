const express = require('express')
    , router = express.Router();
const multer  =   require('multer');
const upload = multer({ dest: '/tmp/' });

router.post('/api/fmm/fileanalyse', upload.any() , function(req, res) {
    console.log(req.files[0]);
    res.json({name: req.files[0].originalname, type: req.files[0].mimetype, size: req.files[0].size});
});



router.get('/fmm', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

module.exports = router;