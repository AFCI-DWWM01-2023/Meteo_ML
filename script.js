const apiKey = '4441e8f8-fd86-4bac-9808-4b4ba9576112';

const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const cityInputElement = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');

// Écouteur d'événement pour le bouton de recherche
searchButton.addEventListener('click', () => {
  const cityName = cityInputElement.value;
  getWeatherData(cityName);
});

// Fonction pour obtenir les données météo à partir de l'API
function getWeatherData(cityName) {
  // Utilisation de l'API Fetch pour obtenir les données
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Afficher les informations météo sur la page
      cityNameElement.textContent = data.name;
      temperatureElement.textContent = data.main.temp;
      conditionsElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      // En cas d'erreur lors de l'appel API
      console.error('Erreur lors de la récupération des données météo:', error);
      alert('Erreur lors de la récupération des données météo. Veuillez vérifier le nom de la ville et réessayer.');
    });
}
