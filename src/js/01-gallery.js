import ElementGalleryTemp from '../templates/element-gallery.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const refs = {
  divGallery: document.querySelector('.gallery'),
};
//===============================================
function markupGallery() {
  galleryItems.map(galleryItem => {
    refs.divGallery.insertAdjacentHTML('beforeend', ElementGalleryTemp(galleryItem));
  });
}
//===============================================
function oupenModalWindow() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

markupGallery(); //Creating and rendering gallery
oupenModalWindow(); //Oupen modal window with img
