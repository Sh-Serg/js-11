import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createGallerySimplelightbox() {
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {});
}

function refreshGallerySimplelightbox() {
  let gallery = new SimpleLightbox('.gallery a');
  gallery.refresh('show.simplelightbox', function () {});
}

export { createGallerySimplelightbox, refreshGallerySimplelightbox };
