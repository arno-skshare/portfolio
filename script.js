// Simple contact form interaction
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thanks ${name}! Your message has been sent.`);
    contactForm.reset();
});
