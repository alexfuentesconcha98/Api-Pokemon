const apiButton = document.getElementById('apiButton');

const callAPI = () => {
   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(e => console.error(new Error(e)))
}

apiButton.addEventListener('click', callAPI);