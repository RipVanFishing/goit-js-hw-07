import { galleryItems } from './gallery-items.js';
// Change code below this line


const mainGalleryRef = document.querySelector(".gallery");
const markupGallery = createImgMarkup(galleryItems);

mainGalleryRef.insertAdjacentHTML('afterbegin', markupGallery);



 function createImgMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `
      
 <li> <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      title="${description}"
    />
  </a></li>
`;
    })
    .join("");
}


let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", () => {
  captionsData: "title";
  captionDelay: 250;
});
