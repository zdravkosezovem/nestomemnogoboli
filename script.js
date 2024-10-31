
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-icon');
    const searchInput = document.getElementById('searchInput');

    function performSearch() {
        const input = searchInput.value.toLowerCase().trim();
        const ucenici = document.querySelectorAll('.ucenik');
        let found = false;

        ucenici.forEach(ucenik => {
            const text = ucenik.textContent.toLowerCase();
            const match = text.includes(input);
            
            ucenik.style.display = match || !input ? 'flex' : 'none';
            
            if (match && !found && input) {
                found = true;
                ucenik.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        if (!found && input) {
            alert('Nema rezultata pretrage.');
        }
    }

    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
        // Real-time search as user types
        if (searchInput.value.length >= 2) {
            performSearch();
        }
    });
});


// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let openModal = document.getElementById("openModal");

// Get the <span> element that closes the modal
let closeModal = document.getElementById("closeModal");

// When the user clicks the button, open the modal 
openModal.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
let searchButton = document.querySelector('#search-button');
let searchInput = document.querySelector('#search-input');

// Function to toggle the navigation menu
const toggleHamburgerMenu = () => {
    if (window.innerWidth <= 1155) { // Only toggle on small screens
        navigationItems.classList.toggle('active');
        closeHam.style.display = navigationItems.classList.contains('active') ? 'block' : 'none';
        openHam.style.display = navigationItems.classList.contains('active') ? 'none' : 'block';
    }
};

// Event listeners for the hamburger menu
openHam.addEventListener('click', toggleHamburgerMenu);
closeHam.addEventListener('click', toggleHamburgerMenu);

// Search button functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    alert(`Searching for: ${query}`);
});

// Reset hamburger menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1155) {
        navigationItems.classList.remove('active'); // Hide the menu items
        closeHam.style.display = 'none'; // Hide close button
        openHam.style.display = 'none'; // Hide hamburger icon on larger screens
    } else {
        openHam.style.display = 'block'; // Show hamburger icon on smaller screens
    }
});

