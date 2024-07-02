let delayTimer;

function delayedConvertCGPA() {
  clearTimeout(delayTimer);
  delayTimer = setTimeout(convertCGPA, 1000); // Delay for 1 second (2000 milliseconds)
}

function convertCGPA() {
  const cgpaInput = document.getElementById('cgpa_input').value;
  const cgpa = parseFloat(cgpaInput);
  
  if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    document.getElementById('error_msg').innerText = 'Please enter a valid CGPA between 0.00 and 10.00';
    clearOutput();
    return;
  }

  document.getElementById('error_msg').innerText = '';
  document.getElementById('op_cgpa').innerText = cgpa.toFixed(2);
  document.getElementById('op_grade').innerText = '-';
  document.getElementById('op_per').innerText = '-';

  let grade, percentage;

  if (cgpa >= 9) {
    grade = 'O';
    percentage = 20 * cgpa - 100;
  } else if (cgpa >= 8) {
    grade = 'A+';
    percentage = 12 * cgpa - 25;
  } else if (cgpa >= 7) {
    grade = 'A';
    percentage = 10 * cgpa - 7.5;
  } else if (cgpa >= 6) {
    grade = 'B+';
    percentage = 5 * cgpa + 26.25;
  } else if (cgpa >= 5) {
    grade = 'B';
    percentage = 10 * cgpa - 2.5;
  } else if (cgpa >= 4) {
    grade = 'C';
    percentage = 10 * cgpa - 2.5;
  } else if (cgpa >= 3) {
    grade = 'D';
    percentage = 6.6 * cgpa + 13.6;
  } else {
    grade = 'F';
    percentage = 0; // Failed, so percentage is not applicable
  }

  document.getElementById('op_grade').innerText = grade;
  document.getElementById('op_per').innerText = percentage.toFixed(2) + '%';
}

function clearOutput() {
  document.getElementById('op_cgpa').innerText = '-';
  document.getElementById('op_grade').innerText = '-';
  document.getElementById('op_per').innerText = '-';
}



function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      alert(`${elementId.toUpperCase()} value copied to clipboard: ${text}`);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy value to clipboard.');
    });
}
