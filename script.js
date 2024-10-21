function calculateAge() {
    var dob = document.getElementById('dob').value;

    if (dob === '') {
        document.getElementById('result').textContent = "Please enter a valid date of birth.";
        return;
    }

    var dobDate = new Date(dob);
    var today = new Date();

    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    var dayDiff = today.getDate() - dobDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `"You are  ${age}  years old."`;
}