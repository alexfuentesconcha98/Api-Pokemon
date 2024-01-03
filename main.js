const apiButton = document.getElementById('apiButton');

const callAPI = () => {
   fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res =>{
        console.log(res);
   })
};

apiButton.addEventListener('click', callAPI);