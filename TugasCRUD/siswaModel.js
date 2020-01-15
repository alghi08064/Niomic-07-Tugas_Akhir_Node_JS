var mongoose = require('mongoose');

//setup schema
var mahasiswaSchema = mongoose.Schema({
  nim: {
    type: Number,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: {
    type: String,
    required: true
  },
  semester: Number,
  hobi: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

//export contact siswaModel
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
}
