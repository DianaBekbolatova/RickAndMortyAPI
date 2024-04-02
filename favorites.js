//Добавление персонажей в избранное 
let favoritesContainer = document.querySelector('#favorites-container')
let modalFavorites = document.querySelector('#modal-favorites')
modalFavorites.style.display = 'none'

let count = document.querySelector('#count')
let favorites = document.querySelector('.like')
let i = 0
let idFav = []

let isShow = false
function isShowMod(){
   if(!isShow){
    modalFavorites.style.display = 'flex'
    isShow = true
   }
   else{
    modalFavorites.style.display = 'none'
    isShow = false
   }
}
favorites.addEventListener('click', ()=>{
    isShowMod()
})
export default function addToFavorites(characters){
        if(idFav.includes(characters.id)){
            let p = document.createElement('p')
                p.innerHTML = `Already in favorites`
                p.classList.add('ifFavorites')
                p.style.display = 'block'
                favoritesContainer.append(p)
            setTimeout(()=>{
                p.style.display = 'none'
            },3000)
          
        }else{
            i++
            count.textContent = i
            idFav.push(characters.id)
            console.log(characters)
                
            let cartFavorite = document.createElement('div')
            cartFavorite.innerHTML = characters.name
            let img = document.createElement('img')
            img.src = characters.image
            cartFavorite.append(img)
            cartFavorite.classList.add('cartFavorite')
            cartFavorite.setAttribute('data-name', characters.name)
            modalFavorites.append(cartFavorite)
            localStorage.setItem(`${characters.name}`, `${characters.id}`)
        
        }

}
