

const container = document.querySelector ('#container');
const baseURL= "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

 for (let i=1; i<=151; i++) {
    const pokemon = document.createElement ('div'); 
    pokemon.classList.add('pokemon');
    const label= document.createElement('span');
    label.innerText= `#${i}`;
const newImg =document.createElement ('img');
newImg.src = `$ {baseURL}$ {1}.png`

pokemon.appendChild(newImg);
pokemon.appendChild (label);
container.appendChild(pokemon)

 }

 <div>
    <img> 
    <span> 2</span>
    
    </img>
 </div>