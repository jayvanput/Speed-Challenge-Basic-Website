async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    const data = await response.json();
    document.getElementById('head__name').innerText = data.name;
}

getData()