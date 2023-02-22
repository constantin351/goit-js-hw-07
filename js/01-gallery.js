import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImgsBoxDiv = document.querySelector(".gallery");
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

const galleryImgsItemsMarkup = createGalleryItemMarkup(galleryItems);
// console.log(galleryImgsItemsMarkup);

galleryImgsBoxDiv.insertAdjacentHTML("afterbegin", galleryImgsItemsMarkup);


galleryImgsBoxDiv.addEventListener('click', onGalleryImgsBoxDivClick);

function onGalleryImgsBoxDivClick(event) {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')) { 
        return;
    }

    function closeModal(event) { 
        if (event.key === "Escape") { 
            instance.close();
            
            console.log(visible);
        }
    };

    const instance = basicLightbox.create(`
        <img class="gallery__image" src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"></img>
        `,
        {
            onShow: instance => { 
                galleryImgsBoxDiv.addEventListener('keydown', closeModal)
            },
            onClose: instance => { 
                galleryImgsBoxDiv.removeEventListener('keydown', closeModal)
            },
        }
    );

    const visible = instance.visible()

    instance.show();
};


// изначальный вариант

// function onGalleryImgsBoxDivClick(event) {
//     event.preventDefault();
    
//     if (!event.target.classList.contains('gallery__image')) { 
//         return;
//     }
//     // console.log(event.target.dataset.source);

//     const instance = basicLightbox.create(`
//     <img class="gallery__image" src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"></img>
//     `);

//     instance.show();
    
//     // закрытие по ESC
//     galleryImgsBoxDiv.addEventListener('keydown', (event) => {
//         if (event.key === "Escape") { 
//             instance.close();
//         }
//     });
// };

















// function onGalleryImgsBoxDivClick(event) {
//     event.preventDefault();
    
//     if (!event.target.classList.contains('gallery__image')) { 
//         return;
//     }
//     // console.log(event.target.dataset.source);

//     const instance = basicLightbox.create(`
//     <img class="gallery__image" src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"></img>
//     `);
    
//     instance.show();
       
//     // закрытие по ESC

//     const visible = instance.visible()

//     galleryImgsBoxDiv.addEventListener('keydown', (event) => {
//         if (event.key === "Escape") { 
//             instance.close(remove);
//             // console.log(visible)
//         }
//     });

//     const remove = (instance) => { 
//         galleryImgsBoxDiv.removeEventListener('keydown', (event) => {
//         if (event.key === "Escape") { 
//             instance.close();
//             // const visible = instance.visible()
//             console.log(visible)
//         }
//     })
//     }
// };
