import { galleryItems } from './gallery-items.js';
// Change code below this line




const mainGalleryRef = document.querySelector(".gallery");
const markupGallery = createImgMarkup(galleryItems);

mainGalleryRef.insertAdjacentHTML('afterbegin', markupGallery);


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

const imgRef = mainGalleryRef.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  console.log(event.target.getAttribute("src"));
  return;
}
   

const instance = basicLightbox.create(toString(imgRef));

instance.show()

