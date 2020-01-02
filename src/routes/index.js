const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });
const defaultController = require('../controllers/controller');

router.get('', (req, res) => res.render('index', {}));
router.get('/map/:lon/:lat/:focus', defaultController.showmap);
router.post('/fileupload', upload.array('filetoupload', 1), defaultController.fileupload);

module.exports = router;