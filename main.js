async function getData(number) {
    console.log(number)
    if (number < 1 || number > 893) {
        number = 1
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then((response) => {
            if (!response.ok) {
                alert('not a valid name!')
                return
            }
            return response
        });

    const data = await response.json();
    document.getElementById('info__name').innerText = data.name;
    document.getElementById('info__img').style.display = "block"
    document.getElementById('info__img').src = data.sprites.front_default;
    document.getElementById('info__img').alt = `sprite of ${data.name}`;
    document.getElementById('info__input-name').value = data.name
    document.getElementById('info__input-id').value = data.id
}

function searchPokemon() {
    let value = this.value
    getData(value)
        .catch(error => {
            console.error(error)
        });
}

function arrowClick(offset) {
    let value = document.getElementById("info__input-id").value
    console.log(value)
    getData(offset + parseInt(value))
}

document.getElementById('info__input-name').onchange = searchPokemon;
document.getElementById('info__input-id').onchange = searchPokemon;
document.getElementById('head__right-arrow').onclick = function () { arrowClick(1) };
document.getElementById('head__left-arrow').onclick = function () { arrowClick(-1) };