let currentPage = 1;
let planets = [];

async function fetchPlanets(page) {
    try {
        const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
        if (response.ok) {
            const data = await response.json();
            planets = data.results;
            displayPlanets(planets);
        } else {
            console.error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching planets:', error);
    }}

function displayPlanets(planets) {
    document.getElementById('planet-list').innerHTML = planets.map((planet, index) => `
        <li class="planet" data-index="${index}">
            <h2>${planet.name}</h2>
            <p><strong>Diameter:</strong> ${planet.diameter} km</p>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
        </li>
    `).join('');

    document.querySelectorAll('.planet').forEach(item => {
        item.onclick = () => {
            const planet = planets[item.getAttribute('data-index')];
            displayPlanetReport(planet);
        };
    });
}
async function displayPlanetReport(planet) {
    try {
        
        const films = await Promise.all(
            planet.films.map(url => fetch(url).then(res => res.json())));
        const filmTitles = films.map(film => film.title).join(', ');

        const residents = await Promise.all(
            planet.residents.map(url => fetch(url).then(res => res.json())));
        const residentNames = residents.map(resident => resident.name).join(', ');
        
        document.getElementById('planet-list').innerHTML = `
            <li class="planet-report">
                <h2>${planet.name}</h2>
                <p><strong>Diameter:</strong> ${planet.diameter} km</p>
                <p><strong>Climate:</strong> ${planet.climate}</p>
                <p><strong>Terrain:</strong> ${planet.terrain}</p>
                <p><strong>Population:</strong> ${planet.population}</p>
                <p><strong>Films:</strong> ${filmTitles || 'None'}</p>
                <p><strong>Residents:</strong> ${residentNames || 'None'}</p>
                <button id="back-button">Back to Planet List</button>
            </li>`;

        document.getElementById('back-button').onclick = () => fetchPlanets(currentPage);
    } catch (error) {
        console.error('Error fetching planet details:', error);
        document.getElementById('planet-list').textContent = 'Failed to load planet details.';}}

document.getElementById('next-button').onclick = () => fetchPlanets(++currentPage);
document.getElementById('previous-button').onclick = () => {
    if (currentPage > 1) fetchPlanets(--currentPage);
};
document.getElementById('planet-filter').oninput = (event) => {
    const filter = event.target.value.toLowerCase();
    displayPlanets(planets.filter(planet =>
        planet.name.toLowerCase().includes(filter)
    ));
};
fetchPlanets(currentPage);
