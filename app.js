const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        // hpCharacters = await res.json();
        // displayCharacters(hpCharacters);
        const mockup = [
            {
                name: 'Harry 1',
                house: 'A',
                image: 'https://via.placeholder.com/300'
            },
            {
                name: 'Harry 2',
                house: 'B',
                image: 'https://via.placeholder.com/300'
            },
            {
                name: 'Harry 3',
                house: 'C',
                image: 'https://via.placeholder.com/300'
            }
        ]

        displayCharacters(mockup);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li onclick="onPopup(this)" class="character">
                <h2 class="name">${character.name}</h2> 
                <p class="house">House: ${character.house}</p>
                <img class="img" src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

var popupContainer = document.getElementsByClassName('pop-cont')[0],
    popupBox = document.getElementsByClassName('pop-up')[0];


function onPopup(character) {
    let name = character.querySelector('.name').innerHTML;
    let house = character.querySelector('.house').innerHTML;
    let img = character.querySelector('.img').src;

    document.querySelector('.pop-name').innerHTML = name;
    document.querySelector('.pop-house').innerHTML = house;
    document.querySelector('.pop-img').src = img;

    if (popupBox.style.display === 'block') {
        popupBox.style.display = 'none';
        
    } else {
        popupBox.style.display = 'block';
    }
}