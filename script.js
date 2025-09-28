var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var MALE = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var FEMALE = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


var form = document.getElementById("akanForm");
var result = document.getElementById("result");
var nameLine = document.getElementById("nameLine");
var explainLine = document.getElementById("explainLine");
var resetBtn = document.getElementById("resetBtn");


resetBtn.addEventListener("click", function () {
    result.style.display = "none";
    nameLine.textContent = "";
    explainLine.textContent = "";
});


form.addEventListener("submit", function (e) {
    e.preventDefault();


    var dateStr = document.getElementById("birthdate").value;
    var checked = document.querySelector('input[name="gender"]:checked');
    var gender = checked ? checked.value : "";


    // Presence checks
    if (!dateStr) { alert("Please select a valid birth date."); return; }
    if (!gender) { alert("Please choose a gender."); return; }


    // Validate calendar date (bounds + leap years)
    var parts = dateStr.split("-");
    var yyyy = parseInt(parts[0], 10);
    var mm = parseInt(parts[1], 10);
    var dd = parseInt(parts[2], 10);
    if (!isValidDate(yyyy, mm, dd)) { alert("Invalid date. Check the day and month."); return; }


    // Compute weekday using JS Date
    var dayIdx = new Date(dateStr).getDay(); // 0=Sun..6=Sat
    var akanName = (gender === "male") ? MALE[dayIdx] : FEMALE[dayIdx];


    // Show result
    nameLine.textContent = "Your Akan name is " + akanName + ".";
    explainLine.textContent = "You were born on a " + DAYS[dayIdx] + ".";
    result.style.display = "block";
});


function isValidDate(y, m, d) {
    if (m < 1 || m > 12) return false;
    if (d < 1 || d > 31) return false;
    var dim = [31, isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return d <= dim[m - 1];
}


function isLeap(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}