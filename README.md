Pokémon Image Grid

This project creates a grid of the first 151 Pokémon images using HTML, CSS, and JavaScript. It fetches the sprites from the Pokémon API and dynamically displays
them in the browser.


Table of Contents

Installation

Usage

File Structure

Code Explanation

Features

License

Installation

Clone the repository:


bash

git clone https://github.com/your-repo/pokemon-image-grid.git

Navigate to the project folder:



cd pokemon-image-grid


Open index.html in your preferred browser:


open index.html

Usage

Once the index.html file is opened, it will display the first 151 Pokémon sprites in a neat grid. Each Pokémon will be labeled with its respective number.

File Structure

plaintext


pokemon-image-grid/
│
├── index.html         # Main HTML file
├── app.js             # JavaScript to dynamically create the Pokémon grid
└── app.css            # CSS file to style the grid

Code Explanation

index.html: Contains the structure of the webpage. It references the external CSS (app.css) and JavaScript (app.js) files.

app.js: Contains the JavaScript code that dynamically fetches Pokémon images from the Pokémon API and appends them to the webpage.

javascript

const baseURL = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {

    const pokemon = document.createElement('div');
    
    pokemon.classList.add('pokemon');
    
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    
    
    const newImg = document.createElement('img');
    
    newImg.src = `${baseURL}${i}.png`;
    
    pokemon.appendChild(newImg);
    
    pokemon.appendChild(label);
    
    container.appendChild(pokemon);
    
}

app.css: Styles the Pokémon grid with inline blocks and ensures that each Pokémon's image and label are properly aligned.

css

.pokemon {

    display: inline-block;
    
    text-align: center;
}

.pokemon img {
    display: block;
    
}
Features

Displays the first 151 Pokémon.

Simple, clean layout.

Dynamically generated content using JavaScript.

License

This project is open source and available under the MIT License.

