import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryListItemsArray(galleryItems) {
    
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>
            `
        });
    // .join('')
};

const galleryItemsArray = createGalleryListItemsArray(galleryItems);
// console.log(galleryItemsArray);

galleryItemsArray.forEach(el => {
    const galleryListItem = document.createElement('li');
    galleryListItem.innerHTML = el;
    galleryList.append(galleryListItem);
});

console.log(galleryList);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionType: "attr", captionsData: "alt" });

 
// function onGalleryImgsListClick(event) {
//     event.preventDefault();
    
//     if (!event.target.classList.contains('gallery__image')) { 
//         return;
//     }
        
//    var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionType: "attr", captionsData: 'alt' });
// };

// // { captionDelay: 250, captionType: "attr", captionsData: 'alt' }

// galleryList.addEventListener('click', onGalleryImgsListClick);



