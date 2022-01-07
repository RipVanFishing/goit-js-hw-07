import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGalleryRef = document.querySelector(".gallery");
const markupGallery = createImgMarkup(galleryItems);

mainGalleryRef.insertAdjacentHTML('afterbegin', markupGallery);

 mainGalleryRef.addEventListener('click', onGalleryClick)

 function createImgMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
   
 }



function onGalleryClick(event) {
  window.addEventListener("keydown", closeEsc);
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const modalSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src ="${modalSrc}" width="800" heigth="600">`);
  instance.show();

  function closeEsc(event) {
     if (event.code === "Escape") {
      instance.close();
     
     }
    
  }
  }  

   



