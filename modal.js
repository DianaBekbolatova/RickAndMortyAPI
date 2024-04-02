//модалка для каждого персонажа

let modalContainer = document.querySelector('#modal-container')
modalContainer.style.display = 'none'
export default function modalCharacter(characters){
    modalContainer.innerHTML = ''

    let modal = document.createElement('div')
    modal.id = 'modal'
    modal.innerHTML = `
    <p>Name: ${characters.name}</p>
    <p>Species: ${characters.species}</p>
    <p>Type: ${characters.type}</p>
    <p>Gender: ${characters.gender}</p>
    <p>Origin: ${characters.origin.name}</p>
    <p>Location: ${characters.location.name}</p>
    `
    let btnClose = document.createElement('button')
    btnClose.textContent = 'Close'
    btnClose.classList.add('btnClose')
    btnClose.addEventListener('click', ()=>{
        modalContainer.style.display = 'none'
    })


    modal.classList.add('modalCharacter')
    modal.append(btnClose)
    modalContainer.append(modal)  
    
   
}

         
        
        
           
