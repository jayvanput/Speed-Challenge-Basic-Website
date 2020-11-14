async function getData(number) {
    if (number < 1 || number > 893) {
        number = 1
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then((response) => {
            if (!response.ok) {
                alert('did not work')
            }
            return response
        });

    const data = await response.json();
    document.getElementById('head__name').innerText = data.name;
    document.getElementById('info__img').src = data.sprites.front_default;
}

document.getElementById('test').addEventListener("click", function () {
    let num = document.getElementById('test-input').value
    getData(num)
        .catch(error => {
            console.error(error)
        });
});