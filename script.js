function login() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    if (!name || !roll) {
        alert("Enter name and roll number");
        return;
    }
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentRoll", roll);
    showDashboard();
}

function logout() {
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentRoll");
    document.getElementById("dashboard-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

function showDashboard() {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("dashboard-page").classList.remove("hidden");
    const name = localStorage.getItem("studentName");
    const roll = localStorage.getItem("studentRoll");
    document.getElementById("student-name").innerText = name;
    document.getElementById("profile-name").innerText = name;
    document.getElementById("profile-roll").innerText = roll;
}

function editProfile() {
    const newName = prompt("Enter new name:", localStorage.getItem("studentName"));
    const newRoll = prompt("Enter new roll number:", localStorage.getItem("studentRoll"));
    if (newName) localStorage.setItem("studentName", newName);
    if (newRoll) localStorage.setItem("studentRoll", newRoll);
    showDashboard();
}

// Auto-show dashboard if already logged in
window.onload = function() {
    if (localStorage.getItem("studentName")) showDashboard();
}
