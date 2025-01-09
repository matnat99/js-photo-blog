// DOM Elements
const galleryElm = document.getElementById('gallery')

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
  })