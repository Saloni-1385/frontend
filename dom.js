// Task 1: Fetch and display users with async/await and loading spinner
const usersTableBody = document.querySelector('#users-table tbody');
const refreshBtn = document.getElementById('refresh-btn');
const spinner = document.getElementById('spinner');

async function fetchUsers() {
  spinner.style.display = 'block';
  usersTableBody.innerHTML = '';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      `;
      usersTableBody.appendChild(row);
    });
  } catch (error) {
    usersTableBody.innerHTML = '<tr><td colspan="3">Error fetching users</td></tr>';
  } finally {
    spinner.style.display = 'none';
  }
}
refreshBtn.addEventListener('click', fetchUsers);

// Automatically fetch users on page load
fetchUsers();

// Task 2: Random joke generator with .then/.catch and disabling button during fetch
const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const jokeBtn = document.getElementById('next-joke-btn');

function fetchJoke() {
  jokeBtn.disabled = true;
  setupEl.textContent = 'Loading joke...';
  punchlineEl.textContent = '';
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(joke => {
      setupEl.textContent = joke.setup;
      punchlineEl.textContent = joke.punchline;
      jokeBtn.disabled = false;
    })
    .catch(error => {
      setupEl.textContent = 'Failed to fetch joke.';
      punchlineEl.textContent = '';
      jokeBtn.disabled = false;
    });
}

jokeBtn.addEventListener('click', fetchJoke);

// Fetch initial joke on load
fetchJoke();