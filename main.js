async function getData(number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    const data = await response.json();
    document.getElementById150150('head__name').innerText = data.name;
    document.getElementById('info__img').src = data.sprites.front_default;
}

document.getElementById('test').addEventListener("click", function () {
    let num = document.getElementById('test-input').value
    getData(num);
});