// Sample data for job listings
const jobListings = [
    { title: 'Software Engineer', company: 'TechCo', location: 'Remote' },
    { title: 'Marketing Specialist', company: 'MarketingPro', location: 'New York' },
    { title: 'Data Analyst', company: 'DataInsights', location: 'San Francisco' }
];

// Function to display job listings
function displayJobListings() {
    const jobListingsContainer = document.getElementById('jobListings');
    jobListingsContainer.innerHTML = ''; // Clear previous listings
    jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <button class="applyBtn">Apply</button>
        `;
        jobListingsContainer.appendChild(jobElement);
    });
}

// Function to toggle login form visibility
function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.classList.toggle('hidden');
}

// Event listener for login button
document.getElementById('loginBtn').addEventListener('click', toggleLoginForm);

// Event listener for submit button (dummy authentication)
document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Dummy authentication logic (replace with actual authentication)
    if (username === 'user' && password === 'password') {
        toggleLoginForm();
        displayJobListings();
        document.getElementById('jobListings').classList.remove('hidden');
    } else {
        alert('Invalid username or password');
    }
});

// Event delegation for apply buttons (dummy functionality)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('applyBtn')) {
        alert('Application submitted successfully!');
    }
});
