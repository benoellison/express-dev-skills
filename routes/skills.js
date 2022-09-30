var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);

router.get(':skill', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:skill', skillsCtrl.delete)

router.get('/:skill/edit', skillsCtrl.edit)
router.put('skills/edit');
module.exports = router;
