const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const base_experience = document.getElementById('baseExperience'); 
const namePokemon = document.getElementById('namePokemon');

const callAPI = () => {
   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   .then(res => res.json())
   .then(data => { 
      apiData.innerText = JSON.stringify(data);
      base_experience.innerText = `Experiencia base: ${JSON.stringify(data.base_experience)}`
      namePokemon.innerText = `Nombre del pokemon: ${JSON.stringify(data.species.name)}`
   } )
   .catch(e => console.error(new Error(e)))
}

apiButton.addEventListener('click', callAPI);