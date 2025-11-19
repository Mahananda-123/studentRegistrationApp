const express = require("express");
const {
  registerStudent,
  getStudents,
  getStudentById,
  deleteStudent
} = require("../controllers/studentController");

const router = express.Router();

router.post("/register", registerStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.delete("/:id", deleteStudent);

module.exports = router;
