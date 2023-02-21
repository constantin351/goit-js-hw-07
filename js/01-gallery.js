import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImgsBoxDiv = document.querySelector(".gallery");

const galleryImgsItemsMarkup = createGalleryItemMarkup(galleryItems);
// console.log(galleryImgsItemsMarkup);
galleryImgsBoxDiv.insertAdjacentHTML("afterbegin", galleryImgsItemsMarkup);

galleryImgsBoxDiv.addEventListener('click', onGalleryImgsBoxDivClick);
// console.log(galleryImgsBoxDiv);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
            </a>
        </div>
    `;
        })
    .join('');
};

function onGalleryImgsBoxDivClick(event) {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) { 
        return;
    }
    // console.log(event.target.dataset.source);

    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"></img>
    `);

    instance.show();
    
    // закрытие по ESC
    galleryImgsBoxDiv.addEventListener('keydown', (event) => {
        if (event.key === "Escape") { 
            instance.close();
        }
    });
};

