// DOM Elements
const galleryElm = document.getElementById('gallery')
const overlayElm = document.getElementById('overlay')
const btnCloseElm = document.getElementById('btn-close')
const overlayImgElm = document.getElementById('overlay-img')

// DOM Events
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then((res) =>{
    let cards = ''

    res.data.forEach(photo => {
        cards += `
            <div class="card">
                <img src="img/pin.svg" alt="Punes">
                <div class="img">
                    <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                </div>
                <div class="description">${photo.title}</div>
            </div>
        `
    })

    galleryElm.innerHTML = cards

    const card = document.querySelectorAll('#gallery .card')
    
    card.forEach((cardClick) =>{
        cardClick.addEventListener('click',()=>{
            const img = cardClick.querySelector('.img img').src
            overlayImgElm.src = img
            overlayElm.classList.remove('hidden')
        })
    })

    btnCloseElm.addEventListener('click', () =>{
        overlayElm.classList.add('hidden')
    })
  })