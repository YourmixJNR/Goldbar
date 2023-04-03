const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city-select').value;
    const beds = document.getElementById('beds-select').value;
    const baths = document.getElementById('baths-select').value;
    
    window.location.href = `/search?city=${city}&beds=${beds}&baths=${baths}`;
})