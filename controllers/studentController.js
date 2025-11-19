const Student = require("../models/Student");

// Add new student
exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student Registered", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
