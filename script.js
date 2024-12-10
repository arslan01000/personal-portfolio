const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const links = document.querySelectorAll('a');

themeToggleButton.addEventListener('click', () => {
    
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    footer.classList.toggle('dark-theme');
    links.forEach(link => link.classList.toggle('dark-theme'));

   
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = '🌞'; 
    } else {
        themeToggleButton.textContent = '🌙'; 
    }
});


emailjs.init('Pjh3ezhYItYfDWHje');


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        emailjs.sendForm('service_tc0du1d', 'template_pwmmak8', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send the message. Please try again. Error: ' + JSON.stringify(error));
            });
    });
}


if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
   
        body.classList.toggle('dark-theme');
        if (header) header.classList.toggle('dark-theme');
        if (footer) footer.classList.toggle('dark-theme');
        links.forEach(link => link.classList.toggle('dark-theme'));

       
        if (body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = '🌞'; 
        } else {
            themeToggleButton.textContent = '🌙'; 
        }
    });
}
