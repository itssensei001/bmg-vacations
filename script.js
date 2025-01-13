// Select necessary DOM elements for the Navbar and Dropdown
const navbar = document.querySelector('.navbar'); // Navbar container
const dropdownButton = document.querySelector('.dropdown-button'); // Dropdown toggle button
const dropdownContent = document.querySelector('.dropdown-content'); // Dropdown menu content
const nextBtn = document.querySelector('.next-btn'); // Next button for carousel
const slides = document.querySelectorAll('.carousel-slide'); // All carousel slides
const container = document.querySelector('.carousel-container'); // Carousel container
const video = document.querySelector('#videoTour video');

// Track the current slide index for the carousel
let currentIndex = 0; // Track the current slide index
const totalSlides = slides.length; // Get the total number of slides

// Track last scroll position for navbar behavior
let lastScrollPosition = 0;

// Handle scroll events to toggle condensed navbar
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 20) {
        // Add 'condensed' class to navbar when scrolling down
        navbar.classList.add('condensed');
    } else {
        // Remove 'condensed' class when scrolling back up
        navbar.classList.remove('condensed');
    }
});

// Toggle dropdown visibility on button click (for mobile view)
dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show'); // Toggle the 'show' class on the dropdown content
});


// Toggle dropdown menu visibility on button click
dropdownButton.addEventListener('hover', () => {
    // Check the current display state of the dropdown menu and toggle it
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'; // Hide the dropdown
    } else {
        dropdownContent.style.display = 'block'; // Show the dropdown
    }
});

// Handle Next Button Click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide, loop back to 0 if necessary
    updateCarousel();
});

// Handle Mouse Wheel Scroll
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        // Scroll Down (Move to the next slide)
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        // Scroll Up (Move to the previous slide)
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Make sure the index wraps around
    }
    updateCarousel();
});

// Update Carousel Position based on the currentIndex
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset based on the currentIndex
    container.style.transform = `translateX(${offset}%)`; // Move the carousel
}

document.querySelector('.see-more').addEventListener('click', function() {
    // This is where you would implement functionality to load more images
    // For example, showing a hidden section with more images or opening a gallery.
    alert("This is where you'd show more images.");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                video.play(); // Play the video when it enters the viewport
            } else {
                video.pause(); // Pause the video when it leaves the viewport
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the video is visible
);

// Observe the video element
observer.observe(video);

 // JavaScript to Capture Input and Generate Dynamic Mailto Link
        function sendEmail() {
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            if (name && message) {
                // Create the email body with input values
                const emailBody = `Name: ${encodeURIComponent(name)}%0A%0A${encodeURIComponent(message)}`;

                // Create the mailto link
                const mailtoLink = `mailto:bmgvacations@gmail.com?subject=Contact Us Form Submission&body=${emailBody}`;

                // Open the user's email client with the pre-filled information
                window.location.href = mailtoLink;
            } else {
                alert("Please fill out all fields.");
            }
        }