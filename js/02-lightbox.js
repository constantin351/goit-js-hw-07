import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");


function createGalleryListItemsArray(galleryItems) {
    
    return galleryItems
        .map(({ preview, original, description }) => { 
            return `
            <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a>
            `
        })
    // .join('')
}

const galleryItemsArray = createGalleryListItemsArray(galleryItems);
console.log(galleryItemsArray)


galleryItemsArray.forEach(el => {
    const galleryListItem = document.createElement('li');
        
    galleryListItem.innerHTML = el;
    
    galleryList.append(galleryListItem)
});

console.log(galleryList);


// 
// const imgEl = document.querySelectorAll(".gallery__image")
// console.log(imgEl)

// for (const item of imgEl) { 
//     item.setAttribute("title", imgEl.alt)
// }


// imgEl.forEach(el => {
//     el.setAttribute("title", imgEl.alt)

// });

    
// console.log(imgEl)



// 


    
function onGalleryImgsListClick(event) {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) { 
        return;
    }
    // console.log(event.target.dataset.source);
    
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); 
};

galleryList.addEventListener('click', onGalleryImgsListClick);


