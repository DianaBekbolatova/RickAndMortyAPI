import renderCharacters from "./render"
import modalCharacter from "./modal"
require('./style.css')



fetch('https://rickandmortyapi.com/api/character/')
.then(res=>res.json())
.then((characters)=>{
    renderCharacters(characters)
    modalCharacter(characters)  
})


