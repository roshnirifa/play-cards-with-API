
const main = document.getElementById('card')
const searchButton = () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    if (isNaN(inputValue)) {
        alert("enter a number");
        input.value = "";
        main.innerHTML = ''

    }
    else if (inputValue <= 0) {
        alert("enter a positive number")
        input.value = ""
        main.innerHTML = ''

    }
    else {
        main.innerHTML = ''
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue} `)
            .then(response => response.json())
            .then(data => cardsDisply(data.cards))
    }


}

const cardsDisply = (cards) => {
    for (const card of cards) {
        const div = document.createElement('div');
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.classList.add("mt-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</a>
            </div>
            </div>
        `
        main.appendChild(div);

    }


}