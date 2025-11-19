const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", studentSchema);
