import addToFavorites from "./favorites"
import modalCharacter from "./modal"

//Отображение персонажей
let container = document.querySelector('#characters-container')
let modal = document.querySelector('#modal-container')


export default function renderCharacters(characters) {
    characters.results.forEach(character => {

        let contForCharacter = document.createElement('div')
        let img = document.createElement('img')
        let btnInfo = document.createElement('button')
        btnInfo.textContent = 'Info'
        btnInfo.classList.add('btnInfo')

        let btnLike = document.createElement('button')
        btnLike.textContent = 'Add to Fav'
        btnLike.classList.add('btnLike')
        img.src = character.image
        contForCharacter.innerHTML = `<p class='name'>${character.name}</p><p class='status'>${character.status}</p>`


        img.classList.add('imageCharacter')
        contForCharacter.append(img)
        contForCharacter.append(btnInfo)
        contForCharacter.append(btnLike)
        contForCharacter.classList.add('contForCharacter')
        container.append(contForCharacter)

        btnInfo.addEventListener('click', () => {
            modal.style.display = 'block'

            modalCharacter(character)
        })

        btnLike.addEventListener('click', () => {
            addToFavorites(character)
        })

    })
}