
// initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
  res.json({
    status: "API is working",
    message: "Welcome to Database Mahasiswa"
  });
});

//import controller
var siswaController = require('./siswaController');

//contact ApiRoutes
router.route('/mahasiswa')
.get(siswaController.index)
.post(siswaController.new);

router.route('/mahasiswa/:mahasiswa_id')
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete);

//export API
module.exports = router;
