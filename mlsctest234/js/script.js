
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Event listener for the "Teams" button in the about section
document.querySelector('.btn-box.btns .btn').addEventListener('click', function() {
    // Redirect to the teams.html page
    window.location.href = 'teams.html';
});

// Event listener for the "Teams" link in the navigation bar
document.getElementById('teams-link').addEventListener('click', function(event) {
    // Prevent the default link behavior to handle the redirection using JavaScript
    event.preventDefault();

    // Redirect to the teams.html page after preventing the default link behavior
    window.location.href = 'teams.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.querySelector('.home');

    function showHomeSection() {
        const scrollPosition = window.scrollY;
        const homeSectionOffset = homeSection.offsetTop;

        if (scrollPosition >= homeSectionOffset && !homeSection.classList.contains('show-animate')) {
            homeSection.classList.add('show-animate');
        } else if (scrollPosition < homeSectionOffset && homeSection.classList.contains('show-animate')) {
            homeSection.classList.remove('show-animate');
        }
    }

    // Initial check on page load
    showHomeSection();

    // Check on scroll
    window.addEventListener('scroll', showHomeSection);
});


