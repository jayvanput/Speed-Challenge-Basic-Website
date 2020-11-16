async function getData(number) {
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

    // Handle the text and img 
    document.getElementById('info__name').innerText = data.name;
    document.getElementById('info__img').style.display = "block"
    document.getElementById('info__img').src = data.sprites.front_default;
    document.getElementById('info__img').alt = `sprite of ${data.name}`;
    document.getElementById('info__input-name').value = data.name
    document.getElementById('info__input-id').value = data.id

    // Get bar lengths from stats.

    // Handle the stat bar lengths.
    document.getElementById('stats-bar-hp').setAttribute("style", `width:${data.stats[0].base_stat}px`);
    document.getElementById('stats-bar-attack').setAttribute("style", `width:${data.stats[1].base_stat}px`);
    document.getElementById('stats-bar-defense').setAttribute("style", `width:${data.stats[2].base_stat}px`);
    document.getElementById('stats-bar-spa').setAttribute("style", `width:${data.stats[3].base_stat}px`);
    document.getElementById('stats-bar-spd').setAttribute("style", `width:${data.stats[4].base_stat}px`);
    document.getElementById('stats-bar-speed').setAttribute("style", `width:${data.stats[5].base_stat}px`);

    document.getElementById('stats__hp-value').innerText = data.stats[0].base_stat
    document.getElementById('stats__attack-value').innerText = data.stats[1].base_stat
    document.getElementById('stats__defense-value').innerText = data.stats[2].base_stat
    document.getElementById('stats__spa-value').innerText = data.stats[3].base_stat
    document.getElementById('stats__spd-value').innerText = data.stats[4].base_stat
    document.getElementById('stats__speed-value').innerText = data.stats[5].base_stat
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