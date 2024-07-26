document.addEventListener('DOMContentLoaded', () => {
    
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (validateEmail(email)) {
            alert(`Thank you for subscribing with ${email}!`);
            emailForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
