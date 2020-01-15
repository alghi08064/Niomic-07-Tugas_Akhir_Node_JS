//import contact model
Mahasiswa = require('./siswaModel');

//handle index actions
exports.index = function (req, res) {
  Mahasiswa.get(function (err, mahasiswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Data Mahasiswa Berhasil Didapatkan",
      data: mahasiswa
    });
  });
};

// handle create contact actions
exports.new = function (req, res) {
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  //save the contact and check for error
  mahasiswa.save(function (err) {
    // if (err)
    // res.json(err);

    res.json({
      message: "Mahasiswa Baru Terdaftar!",
      data: mahasiswa
    });
  });
};

// handle view info
exports.view = function (req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa)
  {
    if(err)
    res.send(err);
    res.json({
      message: "Mahasiswa details loading..",
      data: mahasiswa
    });
  });
};

// Handle update contact info
exports.update = function (req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
    if (err)
    res.send(err);
    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    // save the contact and check for errors
    mahasiswa.save(function (err) {
      if (err)
      res.json(err);
      res.json({
        message: 'Mahasiswa Info updated',
        data: mahasiswa
      });
    });
  });
};

// Handle delete contact
exports.delete = function (req, res) {
  Mahasiswa.remove({
    _id: req.params.mahasiswa_id
  }, function (err, mahasiswa) {
    if (err)
    res.send(err);
    res.json({
      status: "success",
      message: 'Mahasiswa deleted'
    });
  });
};
