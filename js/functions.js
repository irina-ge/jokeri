'use strict';

// Alustetaan elementit
const table = document.querySelector('#jokerTable');
const rowCountElement = document.querySelector('#rowCount');
const newRowButton = document.querySelector('#newRowButton');

let rowCount = 0; // Muuttuja, joka laskee, montako jokeririviä on arvottu

// Funktio satunnaisen numeron luomiseksi väliltä 0-9
const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
};

// Funktio uuden jokeririvin luomiseksi
const createNewRow = () => {
    const tr = document.createElement('tr'); // Luodaan uusi rivi taulukkoon

    // Toteutetaan toistolause, joka suoritetaan 7 kertaa
    for (let i = 0; i < 7; i++) {
        // Luodaan uusi sarake (td), jonka tekstiksi asetetaan satunnaisluku välillä 0-9
        const randomNum = getRandomNumber(); // Satunnainen numero
        const cell = document.createElement('td'); // Sarakkeen solu (td)
        cell.textContent = randomNum; // Asetetaan satunnainen numero solun tekstiksi
        tr.appendChild(cell); // Lisätään solu riviin
    }

    // Lisätään valmis rivi taulukkoon
    table.appendChild(tr); 

    // Päivitetään rivien lukumäärä ja näytetään se p-elementissä
    rowCount++; // Kasvatetaan jokeririvien määrää yhdellä
    rowCountElement.textContent = rowCount; // Näytetään päivitetty määrä käyttöliittymässä
};

// Lisätään kuuntelija "Uusi rivi" -painikkeelle
newRowButton.addEventListener('click', createNewRow);