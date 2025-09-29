// Gather data
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

const form = document.getElementById('akan_gen_Form');
const result = document.getElementById('result');
const nameLine = document.getElementById('namedisp');
const explainLine = document.getElementById('descdisp');
const resetBtn = document.getElementById('resetButton');

// Clear results
resetBtn.addEventListener('click', function () {
    result.style.display = 'none';
    namedisp.textContent = '';
    descdisp.textContent = '';
});

// Submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const dateStr = document.getElementById('birthdate').value;
    const genderInput = document.querySelector("input[name='gender']:checked");

    if (!dateStr) {
        alert('Please enter your birth date.');
        return;
    }
    if (!genderInput) {
        alert('Please choose your gender.');
        return;
    }

    const gender = genderInput.value;
    const date = new Date(dateStr);
    const dayIndex = date.getDay();

    let akanName = '';
    if (gender === 'male') {
        akanName = maleNames[dayIndex];
    } else {
        akanName = femaleNames[dayIndex];
    }

    namedisp.textContent = 'Your Akan name is ' + akanName;
    descdisp.textContent = 'You were born on a ' + days[dayIndex];
    result.style.display = 'block';
});