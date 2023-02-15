let countryArray = [];
let countryContainer = document.querySelector('.countriesContainer');
let btnArray = document.querySelectorAll('button');

function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((result) => result.json())
    .then((data) => {
      countryArray = data;
      displayCountries(countryArray);
    });
}

async function fetch2() {
  let result = await fetch("https://restcountries.com/v3.1/all");
  let data = await result.json();
  console.log(data);
}

function displayCountries(countries){
    countryContainer.innerHTML = "";
    countries
    .filter(country=> 
       country.translations.fra.common.toLowerCase()
       .includes(searchInput.value.toLowerCase())
       )
    .map(country => {
        countryContainer.innerHTML += `
        <div class="card">
          <img
            src="${country.flags.svg}"
            alt="flag ${country.name}"
          />
          <div class="informationContainer">
              <span id="nameCountry">${country.translations.fra.common}</span>
              <span id="capitalCountry">${country.capital}</span>
              <span>Population : 
                <span id="populationCountry">${country.population}</span>
                </span>
            </div>
        </div>
        `;
        
    }
    )
}


fetchCountries();
rangeInput.addEventListener('input', () => rangeSpan.textContent = rangeInput.value);
searchInput.addEventListener('input',()=>displayCountries(countryArray));