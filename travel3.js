function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    if (navUl.style.display === 'block') {
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'block';
    }
}

document.getElementById('planner-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const tripDetails = `
        <h3>Your Trip Details</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
    `;

    document.getElementById('trip-details').innerHTML = tripDetails;
});