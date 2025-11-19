const API_URL = "/api/students";

// ----------------------------
// Validate Fields
// ----------------------------
function validateForm(student) {
  let valid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("usnError").textContent = "";
  document.getElementById("branchError").textContent = "";

  if (!student.name.trim()) {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }
  if (!student.usn.trim()) {
    document.getElementById("usnError").textContent = "USN is required.";
    valid = false;
  }
  if (!student.branch.trim()) {
    document.getElementById("branchError").textContent = "Branch is required.";
    valid = false;
  }
  return valid;
}

// ----------------------------
// Register Student
// ----------------------------
document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    usn: document.getElementById("usn").value,
    branch: document.getElementById("branch").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };

  // Validate mandatory fields
  if (!validateForm(student)) {
    return;
  }

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

  const data = await response.json();
  alert(data.message);

  // Clear all fields after registration
  document.getElementById("studentForm").reset();

  loadStudents(); // refresh table
});

// ----------------------------
// Load Students
// ----------------------------
async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();

  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  students.forEach((s) => {
    const row = `
      <tr>
        <td>${s.name}</td>
        <td>${s.usn}</td>
        <td>${s.branch}</td>
        <td>${s.phone}</td>
        <td>${s.email}</td>
        <td><button onclick="deleteStudent('${s._id}')">Delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// ----------------------------
// Delete Student
// ----------------------------
async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudents();
}

loadStudents();
