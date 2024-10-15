function display_planet_info(planet) {
   const planetItem = document.createElement('li');
    planetItem.classList.add('planet');
   
    planetItem.innerHTML = `
        <h2>${planet.name}</h2>
        <p><strong>Diameter:</strong> ${planet.diameter} km</p>
        <p><strong>Climate:</strong> ${planet.climate}</p>
        <p><strong>Terrain:</strong> ${planet.terrain}</p>
        <p><strong>Population:</strong> ${planet.population}</p>`;
    
    document.getElementById('planet-list').appendChild(planetItem);
}

const examplePlanet = {
    name: 'Tatooine',
    diameter: '10465',
    climate: 'arid',
    terrain: 'desert',
    population: '200000'};

display_planet_info(examplePlanet);
