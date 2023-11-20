document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = new Date(document.getElementById('dob').value);
  const terms = document.getElementById('terms').checked;

  const today = new Date();
  const diff = today - dob;
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55!');
    return;
  }

  const tableBody = document.querySelector('#dataTable tbody');
  const newRow = tableBody.insertRow();
  newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob.toISOString().slice(0, 10)}</td><td>${terms ? 'Yes' : 'No'}</td>`;
  
  document.getElementById('registrationForm').reset();
});
