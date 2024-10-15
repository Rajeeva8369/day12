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
        }} catch (error) {
        console.error('Error fetching planets:', error);
    }}
function displayPlanets(planets) {
    document.getElementById('planet-list').innerHTML = planets.map(planet => `
        <li class="planet">
            <h2>${planet.name}</h2>
            <p><strong>Diameter:</strong> ${planet.diameter} km</p>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
        </li>
    `).join('');
}
document.getElementById('next-button').onclick = () => fetchPlanets(++currentPage);
document.getElementById('previous-button').onclick = () => {
    if (currentPage > 1) fetchPlanets(--currentPage);
};

document.getElementById('planet-filter').oninput = ({ target }) => {
    const filter = target.value.toLowerCase();
    displayPlanets(planets.filter(planet =>
        planet.name.toLowerCase().includes(filter)
    ));
};
fetchPlanets(currentPage);
