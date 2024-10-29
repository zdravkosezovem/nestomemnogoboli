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